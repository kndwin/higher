import { styled } from "stitches.config";

export const Group = styled("div", {
  display: "flex",
  width: "100%",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      col: {
        flexDirection: "column",
      },
    },
    position: {
      center: {
        justifyContent: "center",
        alignItems: "center",
      },
      start: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      apart: {
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  },
});
