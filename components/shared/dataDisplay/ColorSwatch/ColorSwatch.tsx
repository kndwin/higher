import { styled } from "stitches.config";
import { CheckIcon } from "components/icons";

export const ColorSwatch = ({ checked, ...props }: any) => (
  <StyledContainer {...props}>{checked && <CheckIcon />}</StyledContainer>
);
export const StyledContainer = styled("button", {
  height: "2em",
  width: "2em",
  border: "none",
  br: "$round",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  variant: {
    readonly: {
      true: {
        cursor: "default",
        pointerEvent: "none",
      },
    },
  },
});
