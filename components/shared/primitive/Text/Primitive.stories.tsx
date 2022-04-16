import type { Story } from "@ladle/react";
import { Text } from "./Text";

interface StoryProps {
  text: string;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  title: boolean;
}
export const TextStory: Story = ({ text, as, title }: StoryProps) => (
  <Text title={title} as={as as any}>
    {text}
  </Text>
);

TextStory.storyName = "Text";
TextStory.args = {
  text: "Hello World",
  as: "h1",
  title: false,
};

TextStory.argTypes = {
  as: {
    defaultValue: "h1",
    options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
    control: {
      type: "select",
    },
  },
};
