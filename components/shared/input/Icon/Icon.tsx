import { styled } from "stitches.config";

export const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  br: "$1",
  size: "$4",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    type: {
      filled: {
        backgroundColor: "$slate4",
        "&:hover": {
          backgroundColor: "$slate5",
        },
        "&:active": {
          backgroundColor: "$slate6",
        },
      },
      hover: {
        background: "transparent",
        "&:hover": {
          backgroundColor: "$slate5",
        },
      },
      outlined: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$slate6",
        "&:hover": {
          backgroundColor: "$slate1",
        },
      },
    },
  },
});
