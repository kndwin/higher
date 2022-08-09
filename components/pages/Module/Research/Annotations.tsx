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

import * as Collapsible from "components/shared/overlay/Collapsible/Collapsible";

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

const WIDTH = { MIN: 400, MAX: 600 };

export const Annotations = ({ css }: Props) => {
  const { updateFileAttachment, fileAttachmentsResult } = useFileAttachments();
  const { selectedFile, highlights, setHighlights } = useFiles();
  const [width, setWidth] = useState(WIDTH.MIN);

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

  return (
    <Container
      ref={ref}
      css={css}
      style={{
        transition: `${!isResizing && "all"} 0.2s ease-in-out`,
        width,
        maxWidth: width,
        minWidth: width,
      }}
    >
      <Resizer css={{ left: 0 }} onMouseDown={startResizing as any} />
      {highlights?.map((highlight: IHighlight) => (
        <AnnotationCard key={highlight.id} highlight={highlight} />
      ))}
    </Container>
  );
};

type AnnotationCardProps = {
  highlight: IHighlight;
};
const AnnotationCard = ({ highlight }: AnnotationCardProps) => {
  const { updateFileAttachment, fileAttachmentsResult } = useFileAttachments();
  const { selectedFile, highlights, setHighlights } = useFiles();
  const [openEditContent, setOpenEditContent] = useState(false);

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
    <Card
      onClick={() => handleHighlightScrollToView({ highlight })}
      id={`annotation-${highlight.id}`}
      css={{
        gap: "$3",
        width: "100%",
        borderWidth: "2px",
        borderStyle: "solid",
        backgroundColor: `${highlight.comment.color}4`,
        borderColor: `${highlight.comment.color}6`,
        "&:hover": {
          backgroundColor: `${highlight.comment.color}3`,
        },
        "&:focus": {
          backgroundColor: `${highlight.comment.color}5`,
        },
      }}
      key={highlight?.id}
    >
      <ContentCard>
        {highlight.content.text && (
          <Text css={{ whiteSpace: "pre-wrap" }}>{highlight.content.text}</Text>
        )}
        {highlight.content.image && (
          <Screenshot src={highlight.content.image} alt="Notes image" />
        )}
        <Text
          css={{ fontSize: "$1", textAlign: "right" }}
        >{`Page ${highlight.position.pageNumber}`}</Text>
      </ContentCard>
      <Collapsible.Root
        open={openEditContent}
        onOpenChange={(open) => setOpenEditContent(open)}
      >
        <Collapsible.Trigger asChild>
          <Button
            css={{
              mx: "auto",
              my: "$3",
              backgroundColor: `${highlight.comment.color}6`,
              borderColor: `${highlight.comment.color}6`,
              "&:hover": {
                backgroundColor: `${highlight.comment.color}5`,
              },
              "&:focus": {
                backgroundColor: `${highlight.comment.color}6`,
              },
            }}
          >
            {openEditContent ? "Show less" : "Show more"}
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <EditCardContainer>
            <Flex css={{ jc: "space-between", px: "$2", mt: "$2" }}>
              <Flex css={{ gap: "$2", py: "$2", jc: "start" }}>
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
              <Button
                onClick={() => handleHighlightDelete({ highlight })}
                color="error"
              >
                {`Delete`}
                <CrossIcon />
              </Button>
            </Flex>
            <Flex css={{ p: "$2" }}>
              <RTE
                initialText={highlight?.comment?.text}
                updateComment={(text: string) =>
                  handleCommentUpdate({ highlight, text })
                }
              />
            </Flex>
          </EditCardContainer>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
};

const ContentCard = styled(Card, {
  borderWidth: "2px",
  broderStyle: "solid",
  borderColor: "$slate12",
  mb: "$3",
  h: "fit-content",
});

const EditCardContainer = styled(Flex, {
  flexDirection: "column",
  p: "$3",
  background: "$slate1",
});

const Container = styled(Flex, {
  h: "fit-content",
  flexDirection: "column",
  gap: "$3",
  overflowY: "auto",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  p: "$3",
  marginLeft: "$1",
  flex: 1,
  position: "relative",
});

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
