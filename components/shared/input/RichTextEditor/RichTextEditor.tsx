import dynamic from "next/dynamic";
import { Skeleton, Flex } from "components/shared";

const RichTextEditorMantine = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => (
    <Skeleton css={{ minHeight: "inherit", minWidth: "inherit" }} />
  ),
});

export const RichTextEditor = ({ css, ...props }: any) => {
  return (
    <Flex css={{ fontFamily: "$primary", ...css }}>
      <RichTextEditorMantine
        controls={[
          ["bold", "italic", "underline", "link"],
          ["unorderedList", "orderedList"],
          ["h1", "h2", "h3"],
        ]}
        styles={{
          root: {
            fontFamily: "inherit",
            width: "100%",
          },
        }}
        {...props}
      />
    </Flex>
  );
};
