import type { Story } from "@ladle/react";
import { Button } from "./Button";

interface StoryProps {
  text: string;
}
export const ButtonStory: Story = ({ text }: StoryProps) => (
  <Button>{text}</Button>
);

ButtonStory.storyName = "Button";
ButtonStory.args = {
  text: "Hello World",
};
