import {keyframes} from "@stitches/react";
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
  br: "$1",
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
  variants: {
    color: {
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
      },
      accent: {
        backgroundColor: "$cyan4",
        color: "$cyan11",
        "&:hover": {
          backgroundColor: "$cyan5",
        },
        "&:active": {
          backgroundColor: "$cyan6",
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
					size: "$3",
					mr: "$3", 
					backgroundColor: "$slate3",
					borderRadius: "$round",
					borderWidth: "$2", 
					borderStyle: "solid", 
					borderTopColor: "$cyan7",
					borderRightColor: "$cyan7",
					borderBottomColor: "$cyan7",
					borderLetColor: "$cyan8",
					animation: `${spin} 1.2s linear infinite`,
				}
      },
    },
  },
  defaultVariants: {
    color: "accent",
  },
});
