import { styled } from "stitches.config";

export const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  br: "$1",
  size: "$4",
	minSize: "$4",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    type: {
      filled: {
        backgroundColor: "$bg1",
        "&:hover": {
          backgroundColor: "$bg2",
        },
      },
      outlined: {
        borderColor: "$bg2",
        "&:hover": {
          backgroundColor: "$bg1",
        },
      },
    },
  },
});
