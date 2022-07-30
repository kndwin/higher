import { CSS, styled } from "@stitches/react";
import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Card,
  RichTextEditor,
  Button,
  ColorSwatch,
} from "components/shared";

import { CrossIcon } from "components/icons";
import { IHighlight } from "components/shared/pdf";
import { useFileAttachments, useFiles } from "hooks";

import {
  useResizer,
  Resizer,
} from "components/shared/layout/Container/Resizer";

interface Props {
  css?: CSS;
}

const WIDTH = { MIN: 300, MAX: 600 };

export const Annotations = ({ css }: Props) => {
  const { updateFileAttachment, fileAttachmentsResult } = useFileAttachments();
  const { selectedFile, highlights, setHighlights } = useFiles();
  const [width, setWidth] = useState(WIDTH.MAX);

  const { isResizing, startResizing, ref } = useResizer({
    setWidth,
    min: WIDTH.MIN,
    max: WIDTH.MAX,
    direction: "left",
  });

  useEffect(() => {
    if (Boolean(selectedFile) && Boolean(fileAttachmentsResult.data)) {
      const file = fileAttachmentsResult.data.fileAttachments.find(
        ({ id }) => id === selectedFile.id
      );
      if (Boolean(file)) {
        setHighlights(file.highlights);
      }
    }
  }, [
    JSON.stringify(selectedFile),
    fileAttachmentsResult?.data?.fileAttachments,
  ]);

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

  const handleCommentUpdate = ({ highlight, text }) => {
    const index = highlights.findIndex((h: any) => h.id === highlight.id);
    if (index !== -1) {
      const newHighlights = [...highlights];
      newHighlights[index].comment.text = text;
      setHighlights(newHighlights);
    }
  };

  const handleColorUpdate = ({
    highlight,
    color,
  }: {
    highlight: IHighlight;
    color: string;
  }) => {
    const index = highlights.findIndex((h: any) => h.id === highlight.id);
    if (index !== -1) {
      const newHighlights = [...highlights];
      newHighlights[index].comment.color = color;
      setHighlights(newHighlights);
      handleUpdateHighlights({ highlights: newHighlights });
    }
  };

  const handleHighlightScrollToView = ({
    highlight,
  }: {
    highlight: IHighlight;
  }) => {
    const el = document.getElementById(`highlight-${highlight.id}`);
    if (el) {
      el.scrollIntoView({ block: "start" });
    }
  };

  const handleHighlightDelete = async ({
    highlight,
  }: {
    highlight: IHighlight;
  }) => {
    const newHighlights = highlights.filter((h: any) => h.id !== highlight.id);
    setHighlights(newHighlights);
    handleUpdateHighlights({ highlights: newHighlights });
  };

  return (
    <Flex
      ref={ref}
      css={{
        ...css,
        flexDirection: "column",
        gap: "$3",
        overflowY: "auto",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        p: "$3",
        marginLeft: "$1",
        flex: 1,
        position: "relative",
        transition: `${!isResizing && "all"} 0.2s ease-in-out`,
      }}
      style={{
        width,
        maxWidth: width,
        minWidth: width,
      }}
    >
      <Resizer css={{ left: 0 }} onMouseDown={startResizing as any} />
      {highlights?.map((highlight: IHighlight) => (
        <Card
          onClick={() => handleHighlightScrollToView({ highlight })}
          id={`annotation-${highlight.id}`}
          css={{
            gap: "$3",
            width: "100%",
            backgroundColor: `${highlight.comment.color}2`,
            borderColor: `${highlight.comment.color}6`,
            borderWidth: "2px",
            borderStyle: "solid",
            "&:hover": {
              backgroundColor: `${highlight.comment.color}3`,
            },
            "&:focus": {
              backgroundColor: `${highlight.comment.color}5`,
            },
          }}
          key={highlight?.id}
        >
          <Card
            css={{
              borderWidth: "2px",
              broderStyle: "solid",
              borderColor: "$slate12",
              mb: "$3",
            }}
          >
            {highlight.content.text && (
              <Text css={{ whiteSpace: "pre-wrap", fontFamily: "serif" }}>
                {highlight.content.text}
              </Text>
            )}
            {highlight.content.image && (
              <Screenshot src={highlight.content.image} alt="Notes image" />
            )}
            <Text
              css={{ fontSize: "$1", textAlign: "right" }}
            >{`Page ${highlight.position.pageNumber}`}</Text>
          </Card>
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
                onClick={() => handleColorUpdate({ highlight, color })}
                css={{ backgroundColor: `${color}4` }}
                checked={highlight.comment.color === color}
              />
            ))}
          </Flex>
          <RTE
            initialText={highlight?.comment?.text}
            css={{ my: "$3" }}
            updateComment={(text: string) =>
              handleCommentUpdate({ highlight, text })
            }
          />
          <Button
            onClick={() => handleHighlightDelete({ highlight })}
            color="error"
            css={{ width: "100%", justifyContent: "space-between" }}
          >
            {`Delete`}
            <CrossIcon />
          </Button>
        </Card>
      ))}
    </Flex>
  );
};

const Box = styled("div");

const RTE = ({ initialText, updateComment, css }: any) => {
  const [rteText, setRteText] = useState(initialText);
  return (
    <RichTextEditor
      css={css}
      value={rteText}
      onChange={setRteText}
      onBlur={() => updateComment(rteText)}
    />
  );
};

const Screenshot = styled("img", {
  width: "100%",
  height: "100%",
});
