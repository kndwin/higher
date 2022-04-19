import { styled } from "stitches.config";

export const Badge = styled("div", {
  display: "inline-block",
  padding: "$1 $2",
  fontFamily: "$primary",
  borderRadius: "$2",
  fontSize: "$1",
  textAlign: "center",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  backgroundColor: "$slate4",
  color: "$slate12",
  "&:not(:last-child)": {
    marginRight: "$3",
  },
  "&:hover": {
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
  },
});
