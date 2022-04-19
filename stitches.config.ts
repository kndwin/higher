import { createStitches } from "@stitches/react";
import { slate, slateDark, red, cyan, grass, amber } from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...red,
      ...cyan,
      ...grass,
      ...amber,
      primaryGradient: "linear-gradient(99.26deg, #0894B3 0%, #84CDDA 107.7%)",
      primary: "$cyan10",
      error: "$red10",
      success: "$grass10",
      warning: "$amber10",
      hlPeach: "#FFA4A4",
      hlAmber: "#FFF1A3",
      hlGrass: "#C2FFA3",
      hlSkyblue: "#A3D9F",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "40px",
      6: "60px",
    },
    radii: {
      1: "4px",
      2: "8px",
			round: "9999px"
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "40px",
      6: "64px",
    },
    fontSizes: {
      1: "10px",
      2: "14px",
      3: "16px",
      4: "24px",
      5: "34px",
      6: "64px",
    },
    fonts: {
      primary: `"Inter", sans-serif`,
    },
    shadows: {
      1: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      2: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      3: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    // Abbreviated padding properties
    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    minSize: (value: string) => ({
      minWidth: value,
      minHeight: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string) => ({
      borderRadius: value,
    }),
		gridRow: (value: string) => ({
			gridTemplateRows: value,
		}),
		gridCol: (value: string) => ({
			gridTemplateColumns: value,
		}),

  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});

export type CSS = Stitches.CSS<typeof config>;
export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
  "*": {
    boxSizing: "border-box",
  },
  "@import": `url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap")`,
});
