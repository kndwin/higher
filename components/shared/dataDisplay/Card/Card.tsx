import { styled } from "stitches.config";

export const StyledCard = styled("div", {
  backgroundColor: "white",
  borderRadius: "$2",
  padding: "$3",
  boxShadow: "$2",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "$slate3",
	},
});

export const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
