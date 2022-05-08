import type { Page, Scaled, LTWHP, Viewport } from "./types";

export const getDocument = (elm: any): Document =>
  (elm || {}).ownerDocument || document;

export const getWindow = (elm: any): typeof window =>
  (getDocument(elm) || {}).defaultView || window;

export const isHTMLElement = (elm: any) =>
  elm instanceof HTMLElement || elm instanceof getWindow(elm).HTMLElement;

export const isHTMLCanvasElement = (elm: any) =>
  elm instanceof HTMLCanvasElement ||
  elm instanceof getWindow(elm).HTMLCanvasElement;

export const asElement = (x: any): HTMLElement => x;

export const getPageFromElement = (target: HTMLElement): Page | null => {
  const node = asElement(target.closest(".page"));

  if (!node || !isHTMLElement(node)) {
    return null;
  }

  const number = Number(asElement(node).dataset.pageNumber);

  return { node, number } as Page;
};

export const getPagesFromRange = (range: Range): Page[] => {
  const startParentElement = range.startContainer.parentElement;
  const endParentElement = range.endContainer.parentElement;

  if (!isHTMLElement(startParentElement) || !isHTMLElement(endParentElement)) {
    return [] as Page[];
  }

  const startPage = getPageFromElement(asElement(startParentElement));
  const endPage = getPageFromElement(asElement(endParentElement));

  if (!startPage?.number || !endPage?.number) {
    return [] as Page[];
  }

  if (startPage.number === endPage.number) {
    return [startPage] as Page[];
  }

  if (startPage.number === endPage.number - 1) {
    return [startPage, endPage] as Page[];
  }

  const pages: Page[] = [];

  let currentPageNumber = startPage.number;

  const document = startPage.node.ownerDocument;

  while (currentPageNumber <= endPage.number) {
    const currentPage = getPageFromElement(
      document.querySelector(
        `[data-page-number='${currentPageNumber}'`
      ) as HTMLElement
    );
    if (currentPage) {
      pages.push(currentPage);
    }
  }

  return pages as Page[];
};

export const findOrCreateContainerLayer = (
  container: HTMLElement,
  className: string
) => {
  const doc = getDocument(container);
  let layer = container.querySelector(`.${className}`);

  if (!layer) {
    layer = doc.createElement("div");
    layer.className = className;
    container.appendChild(layer);
  }

  return layer;
};

interface WIDTH_HEIGHT {
  width: number;
  height: number;
}

export const viewportToScaled = (
  rect: LTWHP,
  { width, height }: WIDTH_HEIGHT
): Scaled => {
  return {
    x1: rect.left,
    y1: rect.top,

    x2: rect.left + rect.width,
    y2: rect.top + rect.height,

    width,
    height,

    pageNumber: rect.pageNumber,
  };
};

export const scaledToViewport = (
  scaled: Scaled,
  viewport: Viewport,
  usePdfCoordinates: boolean = false
): LTWHP => {
  const { width, height } = viewport;

  if (usePdfCoordinates) {
    return pdfToViewport(scaled, viewport);
  }

  if (scaled.x1 === undefined) {
    throw new Error("You are using old position format, please update");
  }

  const x1 = (width * scaled.x1) / scaled.width;
  const y1 = (height * scaled.y1) / scaled.height;

  const x2 = (width * scaled.x2) / scaled.width;
  const y2 = (height * scaled.y2) / scaled.height;

  return {
    left: x1,
    top: y1,
    width: x2 - x1,
    height: y2 - y1,
    pageNumber: scaled.pageNumber,
  };
};

const pdfToViewport = (pdf: Scaled, viewport: Viewport): LTWHP => {
  const [x1, y1, x2, y2] = viewport.convertToViewportRectangle([
    pdf.x1,
    pdf.y1,
    pdf.x2,
    pdf.y2,
  ]);

  return {
    left: x1,
    top: y1,

    width: x2 - x1,
    height: y1 - y2,

    pageNumber: pdf.pageNumber,
  };
};

export const getAreaAsPNG = (
  canvas: HTMLCanvasElement,
  position: LTWHP
): string => {
  const { left, top, width, height } = position;

  const doc = canvas ? canvas.ownerDocument : null;
  // @TODO: cache this?
  const newCanvas = doc && doc.createElement("canvas");

  if (!newCanvas || !isHTMLCanvasElement(newCanvas)) {
    return "";
  }

  newCanvas.width = width;
  newCanvas.height = height;

  const newCanvasContext = newCanvas.getContext("2d");

  if (!newCanvasContext || !canvas) {
    return "";
  }

  const dpr: number = window.devicePixelRatio;

  newCanvasContext.drawImage(
    canvas,
    left * dpr,
    top * dpr,
    width * dpr,
    height * dpr,
    0,
    0,
    width,
    height
  );

  return newCanvas.toDataURL("image/png");
};

export const getBoundingRect = (clientRects: Array<LTWHP>): LTWHP => {
  const rects = Array.from(clientRects).map((rect) => {
    const { left, top, width, height, pageNumber } = rect;

    const X0 = left;
    const X1 = left + width;

    const Y0 = top;
    const Y1 = top + height;

    return { X0, X1, Y0, Y1, pageNumber };
  });

  let firstPageNumber = Number.MAX_SAFE_INTEGER;

  rects.forEach((rect) => {
    firstPageNumber = Math.min(
      firstPageNumber,
      rect.pageNumber ?? firstPageNumber
    );
  });

  const rectsWithSizeOnFirstPage = rects.filter(
    (rect) =>
      (rect.X0 > 0 || rect.X1 > 0 || rect.Y0 > 0 || rect.Y1 > 0) &&
      rect.pageNumber === firstPageNumber
  );

  const optimal = rectsWithSizeOnFirstPage.reduce((res, rect) => {
    return {
      X0: Math.min(res.X0, rect.X0),
      X1: Math.max(res.X1, rect.X1),

      Y0: Math.min(res.Y0, rect.Y0),
      Y1: Math.max(res.Y1, rect.Y1),

      pageNumber: firstPageNumber,
    };
  }, rectsWithSizeOnFirstPage[0]);

  const { X0, X1, Y0, Y1, pageNumber } = optimal;

  return {
    left: X0,
    top: Y0,
    width: X1 - X0,
    height: Y1 - Y0,
    pageNumber,
  };
};

export const getClientRects = (
  range: Range,
  pages: Page[],
  shouldOptimize: boolean = true
): Array<LTWHP> => {
  const clientRects = Array.from(range.getClientRects());

  const rects: LTWHP[] = [];

  for (const clientRect of clientRects) {
    for (const page of pages) {
      const pageRect = page.node.getBoundingClientRect();

      if (
        isClientRectInsidePageRect(clientRect, pageRect) &&
        clientRect.top >= 0 &&
        clientRect.bottom >= 0 &&
        clientRect.width > 0 &&
        clientRect.height > 0 &&
        clientRect.width < pageRect.width &&
        clientRect.height < pageRect.height
      ) {
        const highlightedRect = {
          top: clientRect.top + page.node.scrollTop - pageRect.top,
          left: clientRect.left + page.node.scrollLeft - pageRect.left,
          width: clientRect.width,
          height: clientRect.height,
          pageNumber: page.number,
        } as LTWHP;

        rects.push(highlightedRect);
      }
    }
  }

  return shouldOptimize ? optimizeClientRects(rects) : rects;
};

const isClientRectInsidePageRect = (clientRect: DOMRect, pageRect: DOMRect) => {
  if (clientRect.top < pageRect.top) {
    return false;
  }
  if (clientRect.bottom > pageRect.bottom) {
    return false;
  }
  if (clientRect.right > pageRect.right) {
    return false;
  }
  if (clientRect.left < pageRect.left) {
    return false;
  }

  return true;
};

const sort = (rects: Array<LTWHP>) =>
  rects.sort((A, B) => {
    const top = (A.pageNumber || 0) * A.top - (B.pageNumber || 0) * B.top;

    if (top === 0) {
      return A.left - B.left;
    }

    return top;
  });

const overlaps = (A: LTWHP, B: LTWHP) =>
  A.pageNumber === B.pageNumber &&
  A.left <= B.left &&
  B.left <= A.left + A.width;

const sameLine = (A: LTWHP, B: LTWHP, yMargin = 5) =>
  A.pageNumber === B.pageNumber &&
  Math.abs(A.top - B.top) < yMargin &&
  Math.abs(A.height - B.height) < yMargin;

const inside = (A: LTWHP, B: LTWHP) =>
  A.pageNumber === B.pageNumber &&
  A.top > B.top &&
  A.left > B.left &&
  A.top + A.height < B.top + B.height &&
  A.left + A.width < B.left + B.width;

const nextTo = (A: LTWHP, B: LTWHP, xMargin = 10) => {
  const Aright = A.left + A.width;
  const Bright = B.left + B.width;

  return (
    A.pageNumber === B.pageNumber &&
    A.left <= B.left &&
    Aright <= Bright &&
    B.left - Aright <= xMargin
  );
};

const extendWidth = (A: LTWHP, B: LTWHP) => {
  // extend width of A to cover B
  A.width = Math.max(B.width - A.left + B.left, A.width);
};

const optimizeClientRects = (clientRects: Array<LTWHP>): Array<LTWHP> => {
  const rects = sort(clientRects);

  const toRemove = new Set();

  const firstPass = rects.filter((rect) => {
    return rects.every((otherRect) => {
      return !inside(rect, otherRect);
    });
  });

  let passCount = 0;

  while (passCount <= 2) {
    firstPass.forEach((A) => {
      firstPass.forEach((B) => {
        if (A === B || toRemove.has(A) || toRemove.has(B)) {
          return;
        }

        if (!sameLine(A, B)) {
          return;
        }

        if (overlaps(A, B)) {
          extendWidth(A, B);
          A.height = Math.max(A.height, B.height);

          toRemove.add(B);
        }

        if (nextTo(A, B)) {
          extendWidth(A, B);

          toRemove.add(B);
        }
      });
    });
    passCount += 1;
  }

  return firstPass.filter((rect) => !toRemove.has(rect));
};
