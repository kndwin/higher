import { styled } from "stitches.config";

export const Text = styled("p", {
  fontFamily: "$primary",
  fontSize: "$2",
  variants: {
    title: {
      true: {
        fontSize: "$6",
        fontWeight: "bold",
      },
    },
    as: {
      h1: {
        fontSize: "$5",
        fontWeight: "600",
      },
    },
  },
});
