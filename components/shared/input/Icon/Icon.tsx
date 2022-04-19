import { styled } from "stitches.config";

export const Icon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  br: "$1",
  minSize: "$4",
  "&:hover": {
    cursor: "pointer",
  },
  variants: {
    type: {
      filled: {
        backgroundColor: "$slate3",
        "&:hover": {
          backgroundColor: "$slate4",
        },
        "&:active": {
          backgroundColor: "$slate5",
        },
      },
			hover: {
        "&:hover": {
          backgroundColor: "$slate4",
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
