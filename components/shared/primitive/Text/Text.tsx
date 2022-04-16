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
      h2: {
        fontSize: "$4",
        fontWeight: "400",
      },
    },
  },
  compoundVariants: [
    {
      title: true,
      as: "h1",
      css: {
        fontSize: "$6",
      },
    },
  ],
});
