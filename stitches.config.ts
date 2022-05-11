import { createStitches } from "@stitches/react";
import {
  violet,
  violetDark,
  orange,
  orangeDark,
  purple,
  purpleDark,
  slate,
  slateDark,
  red,
  redDark,
  cyan,
  cyanDark,
  grass,
  grassDark,
  amber,
  amberDark,
} from "@radix-ui/colors";
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
      ...violet,
      ...orange,
      ...purple,
      light: "#fafafa",
      dark: "#121212",
      primaryGradient: "linear-gradient(99.26deg, #0894B3 0%, #84CDDA 107.7%)",
      primary: "$cyan10",
      error: "$red10",
      success: "$grass10",
      warning: "$amber10",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      hlPeach1: "hsl(0, 100%, 99.4%)",
      hlPeach2: "hsl(0, 100%, 98.4%)",
      hlPeach3: "hsl(0, 100%, 96.6%)",
      hlPeach4: "hsl(0, 100%, 94.3%)",
      hlPeach5: "hsl(0, 100%, 91.0%)",
      hlPeach6: "hsl(0, 100%, 86.3%)",
      hlPeach7: "hsl(0, 100%, 79.5%)",
      hlPeach8: "hsl(0, 100%, 71%)",
      hlPeach9: "hsl(0, 100%, 54%)",
      hlPeach10: "hsl(0, 100%, 50%)",
      hlPeach11: "hsl(0, 100%, 43.5%)",
      hlPeach12: "hsl(0, 100%, 13.5%)",
      hlAmber1: "hsl(51, 100%, 99.4%)",
      hlAmber2: "hsl(51, 100%, 98.4%)",
      hlAmber3: "hsl(51, 100%, 96.6%)",
      hlAmber4: "hsl(51, 100%, 94.3%)",
      hlAmber5: "hsl(51, 100%, 91.0%)",
      hlAmber6: "hsl(51, 100%, 86.3%)",
      hlAmber7: "hsl(51, 100%, 79.5%)",
      hlAmber8: "hsl(51, 100%, 71%)",
      hlAmber9: "hsl(51, 100%, 54%)",
      hlAmber10: "hsl(51, 100%, 50%)",
      hlAmber11: "hsl(51, 100%, 43.5%)",
      hlAmber12: "hsl(51, 100%, 13.5%)",
      hlGrass1: "hsl(100, 100%, 99.4%)",
      hlGrass2: "hsl(100, 100%, 98.4%)",
      hlGrass3: "hsl(100, 100%, 96.6%)",
      hlGrass4: "hsl(100, 100%, 94.3%)",
      hlGrass5: "hsl(100, 100%, 91.0%)",
      hlGrass6: "hsl(100, 100%, 86.3%)",
      hlGrass7: "hsl(100, 100%, 79.5%)",
      hlGrass8: "hsl(100, 100%, 71%)",
      hlGrass9: "hsl(100, 100%, 54%)",
      hlGrass10: "hsl(100, 100%, 50%)",
      hlGrass11: "hsl(100, 100%, 43.5%)",
      hlGrass12: "hsl(100, 100%, 13.5%)",
      hlSkyblue1: "hsl(205, 100%, 99.4%)",
      hlSkyblue2: "hsl(205, 100%, 98.4%)",
      hlSkyblue3: "hsl(205, 100%, 96.6%)",
      hlSkyblue4: "hsl(205, 100%, 94.3%)",
      hlSkyblue5: "hsl(205, 100%, 91.0%)",
      hlSkyblue6: "hsl(205, 100%, 86.3%)",
      hlSkyblue7: "hsl(205, 100%, 79.5%)",
      hlSkyblue8: "hsl(205, 100%, 71%)",
      hlSkyblue9: "hsl(205, 100%, 54%)",
      hlSkyblue10: "hsl(205, 100%, 50%)",
      hlSkyblue11: "hsl(205, 100%, 43.5%)",
      hlSkyblue12: "hsl(205, 100%, 13.5%)",
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
      round: "9999px",
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
      4: "0 10px 20px -5px rgb(0 0 0 / 0.1), 0 6px 6px -3px rgb(0 0 0 / 0.1)",
      5: "0 14px 28px -10px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.1)",
      6: "0 19px 38px -12px rgb(0 0 0 / 0.1), 0 15px 12px -7px rgb(0 0 0 / 0.1)",
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

export const darkTheme = createTheme({
	colors: {
		...violetDark,
		...orangeDark,
		...purpleDark,
		...slateDark,
		...redDark,
		...cyanDark,
		...grassDark,
		...amberDark
	}
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
