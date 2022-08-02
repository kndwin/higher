import { keyframes } from "@stitches/react";
import { styled } from "stitches.config";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Button = styled("button", {
  fontFamily: "$primary",
  fontSize: "$2",
  px: "$3",
  py: "$2",
  border: "none",
  br: "$2",
  backgroundColor: "$slate3",
  color: "$slate12",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  position: "relative",
  "&:hover": {
    backgroundColor: "$slate4",
  },
  "&:active": {
    backgroundColor: "$slate5",
  },
  "&:focus": {
    outlineWidth: 1,
  },
  variants: {
    color: {
      secondary: {
        backgroundColor: "$slate4",
        color: "$slate11",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "$slate5",
        },
        "&:active": {
          backgroundColor: "$slate6",
        },
        "&:focus": {
          outlineColor: "$slate7",
        },
      },
      error: {
        backgroundColor: "$red4",
        color: "$red11",
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "$red5",
        },
        "&:active": {
          backgroundColor: "$red6",
        },
        "&:focus": {
          outlineColor: "$red7",
        },
      },
      accent: {
        backgroundColor: "$cyan3",
        color: "$cyan12",
        "&:hover": {
          backgroundColor: "$cyan5",
        },
        "&:active": {
          backgroundColor: "$cyan6",
        },
        "&:focus": {
          outlineColor: "$cyan7",
        },
      },
      success: {
        backgroundColor: "$grass4",
        color: "$grass11",
        "&:hover": {
          backgroundColor: "$grass5",
        },
        "&:active": {
          backgroundColor: "$grass6",
        },
        "&:focus": {
          outlineColor: "$grass7",
        },
      },
    },
    state: {
      default: {},
      disabled: {
        opacity: 0.5,
        cursor: "none",
        pointerEvents: "none",
      },
      loading: {
        opacity: 0.5,
        cursor: "none",
        pointerEvents: "none",
        "&::before": {
          content: "''",
          size: "$2",
          mr: "$3",
          backgroundColor: "$slate3",
          borderRadius: "$round",
          borderWidth: "$2",
          borderStyle: "solid",
          borderTopColor: "$cyan7",
          borderRightColor: "$cyan7",
          borderBottomColor: "$cyan7",
          borderLeftColor: "$cyan8",
          animation: `${spin} 1.2s linear infinite`,
        },
      },
    },
  },
  compoundVariants: [
    {
      color: "error",
      state: "loading",
      css: {
        "&::before": {
          borderTopColor: "$red7",
          borderRightColor: "$red7",
          borderBottomColor: "$red7",
          borderLeftColor: "$red8",
        },
      },
    },
  ],
  defaultVariants: {
    color: "accent",
  },
});
