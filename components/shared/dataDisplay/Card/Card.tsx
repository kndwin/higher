import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";

const fadeLeftToRight = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "75%": {
    opacity: 0.5,
  },
});

export const Card = styled("div", {
  backgroundColor: "white",
  br: "$2",
  padding: "$3",
  boxShadow: "$2",
  variants: {
    state: {
      default: {},
      loading: {
        opacity: 0.5,
        animation: `${fadeLeftToRight} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
      },
    },
    clickable: {
      true: {
        cursor: "pointer",
        outline: "none",
        "&:hover": {
          backgroundColor: "$slate4",
        },
        "&:focus": {
          backgroundColor: "$slate5",
        },
      },
    },
  },
});
