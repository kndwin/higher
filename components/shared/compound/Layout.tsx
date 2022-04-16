import { styled } from "stitches.config";

export const Layout = styled("div", {
  $$pageWidth: "60em",
  variants: {
    type: {
      page: {
        maxWidth: "$$pageWidth",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        mx: "auto",
      },
      dashboard: {},
    },
  },
});
