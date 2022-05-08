import { useEffect } from "react";
import type { CSS } from "@stitches/react";
import { styled } from "stitches.config";

import { Card, Text, Flex, Skeleton } from "components/shared";
import { PdfLoader, PdfHighlighter, IHighlight } from "components/shared/pdf";
import { useFiles } from "hooks";

export const PDF = ({ css }: { css?: CSS }) => {
  const { selectedFile, highlights, setHighlightsPrev, setHighlights } =
    useFiles();
  const fileUrl = Boolean(selectedFile) ? selectedFile.fileUrl : "";

  useEffect(() => {
    if (Boolean(fileUrl)) {
      setHighlights([]);
    } else {
      setHighlights([]);
    }
  }, [fileUrl]);

  return (
    <Container
      css={{
        width: "100%",
        height: "100%",
        position: "relative",
        ...css,
      }}
    >
      {Boolean(fileUrl) ? (
        <PdfLoader url={fileUrl} beforeLoad={<Skeleton />}>
          {(pdfDocument) => {
            return (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                highlights={highlights}
                setHighlights={setHighlightsPrev}
              />
            );
          }}
        </PdfLoader>
      ) : (
        <Card css={{ height: "100%" }}>
          <Text
            as="h1"
            css={{ color: "$slate9" }}
          >{`📄 No file selected`}</Text>
        </Card>
      )}
    </Container>
  );
};

const Container = styled("div", {});
