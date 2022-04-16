import { styled } from "stitches.config";

export const Button = styled("button", {
  fontFamily: "$primary",
  fontSize: "$2",
  px: "$3",
  py: "$2",
	border: "none", 
	br: "$1", 
  backgroundColor: "$fg",
	color: "$bg",
	display: "flex", 
	alignItems: "center",
	cursor: "pointer", 
	'&:hover': {
		background: "$primary",
	}
});
