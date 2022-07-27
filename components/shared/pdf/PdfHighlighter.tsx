import { useState, useRef, useEffect } from "react";
import type { FC, MouseEvent } from "react";
import { createRoot } from "react-dom/client";
import { styled } from "stitches.config";
import debounce from "lodash.debounce";
import type { PDFDocumentProxy } from "pdfjs-dist";

import {
  getAreaAsPNG,
  getClientRects,
  getBoundingRect,
  getPagesFromRange,
  scaledToViewport,
  viewportToScaled,
  asElement,
} from "./utilities";

import type { Position, ScaledPosition, IHighlight } from "./types";
import { nanoid } from "nanoid";

import {
  Popover,
  Text,
  Button,
  Card,
  Flex,
  RichTextEditor,
  ColorSwatch,
  Tooltip,
} from "components/shared";

import { useFiles, useFileAttachments, useMouseDown } from "hooks";
import { Highlight } from "react-pdf-highlighter";

type T_ViewportHighlight<T_HT> = { position: Position } & T_HT;

interface Props<T_HT> {
  highlights: Array<T_HT>;
  setHighlights: (fn: (prev: IHighlight[]) => IHighlight[]) => void;
  pdfDocument: PDFDocumentProxy;
  onScrollChange?: () => void;
  scrollRef?: (scrollTo: (highlight: IHighlight) => void) => void;
  pdfScaleValue?: string;
}

type HighlightTmpRef = {
  newHighlight: IHighlight;
  viewportPosition: Position;
};

export const PdfHighlighter: FC<Props<IHighlight>> = ({
  highlights,
  setHighlights,
  pdfDocument,
  pdfScaleValue = "auto",
  ...props
}) => {
  const [ghostHighlight, setGhostHighlight] = useState<any>();
  const [tipPosition, setTipPosition] = useState<any>();
  const [pdfViewer, setPDFViewer] = useState<any>();
  const [eventBus, setEventBus] = useState<any>();

  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const highlightTmpRef = useRef<HighlightTmpRef>({} as HighlightTmpRef);

  const onMouseDown = () => {
    isMouseDownRef.current = true;
  };

  const onMouseUp = () => {
    isMouseDownRef.current = false;
    if (Boolean(highlightTmpRef?.current.newHighlight)) {
      setGhostHighlight(highlightTmpRef.current.newHighlight);
      setTipPosition(highlightTmpRef.current.viewportPosition);
      renderHighlights();
      highlightTmpRef.current = {} as HighlightTmpRef;
    }
  };

  const [resizeObserver, setResizeObserver] = useState<ResizeObserver | null>(
    null
  );
  const [dropmenuAddConfirmOpen, setDropmenuAddConfirmOpen] = useState(false);

  const initializePdf = async () => {
    if (typeof ResizeObserver !== "undefined") {
      setResizeObserver(new ResizeObserver(debouncedScaleValue));
    }
    const EventBus = await import("pdfjs-dist/web/pdf_viewer").then(
      (mod) => mod.EventBus
    );
    const PDFViewer = await import("pdfjs-dist/web/pdf_viewer").then(
      (mod) => mod.PDFViewer
    );
    const PDFLinkService = await import("pdfjs-dist/web/pdf_viewer").then(
      (mod) => mod.PDFLinkService
    );

    const eventBus = new EventBus();
    const pdfLinkService = new PDFLinkService();

    const pdfViewer = new PDFViewer({
      container: containerRef.current,
      eventBus: eventBus,
      linkService: pdfLinkService,
      textLayerMode: 2,
      removePageBorders: true,
      renderer: "canvas",
      l10n: null,
    });

    pdfLinkService.setDocument(pdfDocument);
    pdfLinkService.setViewer(pdfViewer);
    pdfViewer.setDocument(pdfDocument);

    setEventBus(eventBus);
    setPDFViewer(pdfViewer);
    renderHighlights();
  };

  useEffect(() => {
    initializePdf();
  }, [pdfDocument]);

  useEffect(() => {
    const { ownerDocument: doc } = containerRef.current;
    if (Boolean(doc) && Boolean(eventBus)) {
      eventBus.on("pagesinit", onDocumentReady);
      doc.addEventListener("mousedown", onMouseDown);
      doc.addEventListener("mouseup", onMouseUp);
      doc.addEventListener("selectionchange", debouncedSelectionChange);
      doc.defaultView?.addEventListener("resize", debouncedScaleValue);
    }
    return () => {
      if (Boolean(doc) && Boolean(eventBus)) {
        eventBus.off("pagesinit", onDocumentReady);
        doc.removeEventListener("mousedown", onMouseDown);
        doc.removeEventListener("mouseup", onMouseUp);
        doc.removeEventListener("selectionchange", debouncedSelectionChange);
        doc.defaultView?.removeEventListener("resize", debouncedScaleValue);
      }
    };
  }, [eventBus]);

  useEffect(() => {
    Boolean(resizeObserver) && resizeObserver.observe(containerRef.current);
    return () => {
      Boolean(resizeObserver) && resizeObserver.disconnect();
    };
  }, [resizeObserver]);

  const onDocumentReady = () => {
    handleScaleValue();
  };

  const onSelectionChange = (e: PointerEvent) => {
    if (!Boolean(containerRef.current?.ownerDocument)) {
      return;
    }
    const selection =
      containerRef.current.ownerDocument.defaultView?.getSelection();

    if (!selection || selection?.isCollapsed) {
      return;
    }
    const range = selection.getRangeAt(0);
    const pages = getPagesFromRange(range);

    if (!pages || pages.length === 0 || !range || selection.isCollapsed) {
      return;
    }

    const rects = getClientRects(range, pages);
    if (rects.length === 0) {
      return;
    }
    const boundingRect = getBoundingRect(rects);
    const viewportPosition: Position = {
      boundingRect,
      rects,
      pageNumber: pages[0].number,
    };
    const content = {
      text: range.toString(),
    };
    const scaledPosition = viewportPositionToScaled(viewportPosition);
    const newHighlight: IHighlight = {
      position: scaledPosition,
      content,
      comment: {
        text: "",
        emoji: "",
        color: "",
      },
      id: nanoid(),
    };

    highlightTmpRef.current = {
      newHighlight,
      viewportPosition,
    };
  };

  useEffect(() => {
    if (Boolean(ghostHighlight)) {
      setDropmenuAddConfirmOpen(true);
    }
  }, [ghostHighlight]);

  useEffect(() => {
    if (Boolean(highlights) && Boolean(pdfViewer)) {
      clearHighlightsRendered();
      renderHighlights();
    }
  }, [highlights]);

  const debouncedSelectionChange = debounce(onSelectionChange, 100);

  const viewportPositionToScaled = ({
    pageNumber,
    boundingRect,
    rects,
  }: Position): ScaledPosition => {
    const viewport = pdfViewer?.getPageView(pageNumber - 1).viewport;

    return {
      boundingRect: viewportToScaled(boundingRect, viewport),
      rects: (rects || []).map((rect) => viewportToScaled(rect, viewport)),
      pageNumber,
    };
  };

  const scaledPositionToViewport = ({
    pageNumber,
    boundingRect,
    rects,
    usePdfCoordinates,
  }: ScaledPosition): Position => {
    const viewport = pdfViewer?.getPageView(pageNumber - 1)?.viewport;
    return {
      boundingRect: scaledToViewport(boundingRect, viewport, usePdfCoordinates),
      rects: (rects || []).map((rect) =>
        scaledToViewport(rect, viewport, usePdfCoordinates)
      ),
      pageNumber,
    };
  };

  const handleScaleValue = () => {
    if (Boolean(pdfViewer)) {
      pdfViewer.currentScaleValue = pdfScaleValue;
      renderHighlights();
    }
  };
  const debouncedScaleValue = debounce(handleScaleValue, 1_000);

  const renderHighlights = () => {
    // Early return if there is no pdfViewer
    if (Boolean(!pdfViewer)) {
      return;
    }
    // Group highlights by page so that we batch the highlights under the right layer
    const groupedHighlights = highlights.reduce((acc, highlight) => {
      const { pageNumber } = highlight.position;
      if (!acc[pageNumber]) {
        acc[pageNumber] = [];
      }
      acc[pageNumber].push(highlight);
      return acc;
    }, {});

    Object.keys(groupedHighlights).forEach((pageNumber: string) => {
      const pageRef = pdfViewer?.getPageView(Number(pageNumber) - 1)?.div;
      const prevLayerDiv = pageRef?.querySelector(".highlightLayer");

      // Adding it here allows the layers tree inside the pdf page to be consistent
      const layerDiv = document.createElement("div");
      layerDiv.classList.add("highlightLayer");
      layerDiv.style.position = "absolute";
      layerDiv.style.top = `0px`;
      layerDiv.style.left = `0px`;

      // Mounting the div to allow JSX and Stitches API's to work
      const layerRoot = createRoot(layerDiv);
      layerRoot.render(
        <>
          {groupedHighlights[pageNumber].map((highlight: IHighlight) => {
            const scaledPosition = scaledPositionToViewport(highlight.position);
            const { top, left, height, width } = scaledPosition?.boundingRect;

            const handleAnnotationScrollToView = ({ highlight }) => {
              const el = document.getElementById(`annotation-${highlight.id}`);
              if (el) {
                el.scrollIntoView({ block: "start" });
              }
            };

            return (
              <Tooltip delayDuration={100} key={highlight.id}>
                <Tooltip.Trigger asChild>
                  <StyledHighlight
                    onClick={() => handleAnnotationScrollToView({ highlight })}
                    id={`highlight-${highlight.id}`}
                    css={{
                      position: "absolute",
                      background: `${highlight.comment.color}9`,
                      top: `calc(${top}px + 100%)`,
                      left,
                      height,
                      width,
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content color="dark" css={{ br: "$2", px: "$3" }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: highlight.comment.text }}
                  />
                </Tooltip.Content>
              </Tooltip>
            );
          })}
        </>
      );

      Boolean(prevLayerDiv) && pageRef.removeChild(prevLayerDiv);
      pageRef.appendChild(layerDiv);
    });
  };

  const clearHighlightsRendered = () => {
    const highlightLayers = document.querySelectorAll(".highlightLayer");
    highlightLayers.forEach((layer) => {
      layer.remove();
    });
  };

  const handleMouseOnSelection = ({ page, boundingRect }: any) => {
    if (!Boolean(page) || !Boolean(boundingRect)) {
      return;
    }
    const pageBoundingRect = {
      ...boundingRect,
      top: boundingRect.top - page.node.offsetTop,
      left: boundingRect.left - page.node.offsetLeft,
      pageNumber: page.number,
    };
    const viewportPosition = {
      boundingRect: pageBoundingRect,
      rects: [],
      pageNumber: page.number,
    };

    const scaledPosition = viewportPositionToScaled(viewportPosition);

    // Get screenshot from canvas API
    const canvas = pdfViewer.getPageView(page.number - 1).canvas;
    const image = getAreaAsPNG(canvas, pageBoundingRect);

    const newHighlight: IHighlight = {
      position: scaledPosition,
      content: { image },
      comment: {
        text: "",
        emoji: "",
        color: "",
      },
      id: nanoid(),
    };

    setGhostHighlight(newHighlight);
    setTipPosition(viewportPosition);
  };

  return (
    <StyledContainer
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
    >
      <StyledPdfViewer className="pdfViewer" />
      {Boolean(pdfViewer) && (
        <PopoverTooltip
          pageDiv={pdfViewer?.getPageView(tipPosition?.pageNumber - 1)?.div}
          open={dropmenuAddConfirmOpen}
          setOpen={setDropmenuAddConfirmOpen}
          highlight={ghostHighlight}
          position={tipPosition}
          setHighlights={setHighlights}
        />
      )}
      <MouseSelection onSelection={handleMouseOnSelection} />
    </StyledContainer>
  );
};

const StyledHighlight = styled("div", {
  position: "absolute",
  opacity: 0.2,
});

const StyledContainer = styled("div", {
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "auto",
});

const StyledPdfViewer = styled("div", {
  mx: "auto",
});

// PopoverTooltip

const PopoverTooltip = ({
  highlight,
  open,
  setOpen,
  position,
  setHighlights,
  pageDiv,
}: any) => {
  const { updateFileAttachment } = useFileAttachments();
  const [colorSelected, setColorSelected] = useState("");
  const { selectedFile } = useFiles();

  const [mode, setMode] = useState<"add-highlight" | "comment">(
    "add-highlight"
  );

  const handleUpdateHighlights = async ({
    highlights,
  }: {
    highlights: IHighlight[];
  }) => {
    const updatedHighlights = await updateFileAttachment({
      where: { id: selectedFile?.id },
      data: { highlights },
    });
  };

  const handleAddComment = () => {
    setHighlights((prev: any[]) => {
      const newHighlights = [
        ...prev,
        {
          ...highlight,
          comment: {
            text: rteContent,
            emoji: "",
            color: colorSelected,
          },
        },
      ];
      handleUpdateHighlights({ highlights: newHighlights });
      return newHighlights;
    });
    setOpen(false);
  };

  const [rteContent, setRteContent] = useState("");

  useEffect(() => {
    setMode("add-highlight");
    setRteContent("");
  }, [position]);

  useEffect(() => {
    if (mode === "comment") {
      setColorSelected("$hlPeach");
    } else {
      setColorSelected("");
    }
  }, [mode]);

  return (
    <Popover key={highlight?.id} open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        asChild
        css={{
          position: "absolute",
          top: pageDiv?.offsetTop + position?.boundingRect?.top,
          left: pageDiv?.offsetLeft + position?.boundingRect?.left,
          bottom: position?.boundingRect?.bottom,
          width: position?.boundingRect?.width,
          height: position?.boundingRect?.height,
        }}
      >
        <HiddenTrigger />
      </Popover.Trigger>
      <Popover.Content
        sideOffset={8}
        css={{
          p: 0,
          border: "none",
          br: "$3",
          boxShadow: `0 19px 38px -12px, 0 15px 12px -7px`,
          color: Boolean(colorSelected)
            ? `${colorSelected}1`
            : "rgb(0 0 0 / 0.2)",
        }}
      >
        {mode === "add-highlight" && (
          <Button onClick={() => setMode("comment")}>{`Add Highlight`}</Button>
        )}
        {mode === "comment" && (
          <Card
            css={{
              p: "$2",
              minWidth: "20em",
              minHeight: "10em",
              backgroundColor: `${colorSelected}1`,
              borderColor: `${colorSelected}5`,
              borderWidth: "3px",
              borderStyle: "solid",
              boxShadow: "none",
            }}
          >
            <Flex css={{ gap: "$2", py: "$2" }}>
              {[
                "$hlPeach",
                "$hlSkyblue",
                "$hlGrass",
                "$hlAmber",
                "$violet",
                "$orange",
              ].map((color) => (
                <ColorSwatch
                  key={color}
                  onClick={() => {
                    setColorSelected(color);
                  }}
                  css={{ backgroundColor: `${color}4` }}
                  checked={colorSelected === color}
                />
              ))}
            </Flex>
            <Flex css={{ minHeight: "5em", minWidth: "20em", mb: "$2" }}>
              <RichTextEditor value={rteContent} onChange={setRteContent} />
            </Flex>

            <Flex css={{ gap: "$2" }}>
              <Button
                onClick={() => setOpen(false)}
                color="secondary"
                css={{ flex: 1 }}
              >{`Cancel`}</Button>
              <Button
                onClick={() => handleAddComment()}
                css={{ flex: 1 }}
              >{`Add Comment`}</Button>
            </Flex>
          </Card>
        )}
      </Popover.Content>
    </Popover>
  );
};

const HiddenTrigger = styled("div", {
  height: 0,
  width: 0,
  visibility: "hidden",
});

// MouseSelection

interface Coords {
  x: number;
  y: number;
}

const MouseSelection = ({ onSelection }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState<Coords | null>(null);
  const [end, setEnd] = useState<Coords | null>(null);
  const [locked, setLocked] = useState(true);

  const getBoundingRect = ({ start, end }: { start: Coords; end: Coords }) => {
    if (!Boolean(end) || !Boolean(start)) {
      return;
    }
    return {
      left: Math.min(end.x, start.x),
      top: Math.min(end.y, start.y),
      width: Math.abs(end.x - start.x),
      height: Math.abs(end.y - start.y),
    };
  };

  const getCoordFromClick = (e: MouseEvent) => {
    const pdfEl = containerRef.current.parentElement;
    const rect = pdfEl.getBoundingClientRect();
    const x = e.pageX - rect.left + pdfEl.scrollLeft;
    const y = e.pageY - rect.top + pdfEl.scrollTop - window.scrollY;
    return { x, y };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (Boolean(start) && locked) {
      const { x, y } = getCoordFromClick(e);
      setEnd({ x, y });
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (!e.altKey) {
      return;
    }
    e.preventDefault();
    const { x, y } = getCoordFromClick(e);
    setStart({ x, y });
    setLocked(true);
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (locked) {
      setLocked(false);
      const { x, y } = getCoordFromClick(e);
      const endToSet = { x, y };
      setEnd(endToSet);
      const node = asElement(e.target).closest(".page");
      const number = Number(asElement(node).dataset.pageNumber);
      onSelection({
        page: { node, number },
        boundingRect: getBoundingRect({ start, end: endToSet }),
      });
    } else {
      setStart(null);
      setEnd(null);
    }
  };

  useEffect(() => {
    const pdfEl = containerRef.current.parentElement;
    pdfEl.addEventListener("mousedown", handleMouseDown as any);
    pdfEl.addEventListener("mousemove", handleMouseMove as any);
    pdfEl.addEventListener("mouseup", handleMouseUp as any);
    return () => {
      pdfEl.removeEventListener("mousedown", handleMouseDown as any);
      pdfEl.removeEventListener("mousemove", handleMouseMove as any);
      pdfEl.removeEventListener("mouseup", handleMouseUp as any);
    };
  }, [containerRef.current, locked]);

  return (
    <Flex ref={containerRef} css={{ position: "block" }}>
      {Boolean(start) && Boolean(end) && (
        <StyledMouseBorder
          css={{
            ...getBoundingRect({ start, end }),
          }}
        />
      )}
    </Flex>
  );
};

const StyledMouseBorder = styled("div", {
  position: "absolute",
  border: "1px solid $slate10",
  background: "$slate6",
  br: "$2",
  opacity: 0.5,
});
