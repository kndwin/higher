import { styled } from "stitches.config";

export const Input = styled("input", {
  fontFamily: "$primary",
  fontSize: "$2",
  px: "$3",
  py: "$2",
  border: "none",
  br: "$1",
  backgroundColor: "$slate1",
  color: "$slate12",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s ease-in-out",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$slate7",

  "&:focus, &:focus-visible, &:hover": {
    borderColor: "$slate8",
  },

  "&:focus-visible": {
    outline: "none",
  },
});
