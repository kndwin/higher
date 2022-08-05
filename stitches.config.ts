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
      primaryGradient: "linear-gradient(120deg, #0894B3, #84CDDA)",
      primary: "$cyan10",
      error: "$red10",
      success: "$grass10",
      warning: "$amber10",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      headerGlassBackground: "rgba(200, 200, 200, .3)",
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
      3: "12px",
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
    w: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
    }),
    maw: (value: Stitches.PropertyValue<"maxWidth">) => ({
      maxWidth: value,
    }),
    miw: (value: Stitches.PropertyValue<"minWidth">) => ({
      minWidth: value,
    }),
    minSize: (value: Stitches.PropertyValue<"minWidth">) => ({
      minWidth: value,
      minHeight: value,
    }),
    h: (value: Stitches.PropertyValue<"height">) => ({
      height: value,
    }),
    mah: (value: Stitches.PropertyValue<"maxHeight">) => ({
      maxHeight: value,
    }),
    mih: (value: Stitches.PropertyValue<"minHeight">) => ({
      minHeight: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pos: (value: Stitches.PropertyValue<"position">) => ({ position: value }),
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    d: (value: Stitches.PropertyValue<"display">) => ({ display: value }),
    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"fontWeight">) => ({
      fontWeight: value,
    }),
    fxw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),
    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    ji: (value: Stitches.PropertyValue<"justifyItems">) => ({
      justifyItems: value,
    }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fz: (value: Stitches.PropertyValue<"fontSize">) => ({ fontSize: value }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),
    fx: (value: Stitches.PropertyValue<"flex">) => ({ flex: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value,
    }),
    cur: (value: Stitches.PropertyValue<"cursor">) => ({
      cursor: value,
    }),
    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    lg: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: value,
    }),
    gtc: (value: Stitches.PropertyValue<"gridTemplateColumns">) => ({
      gridTemplateColumns: value,
    }),
    gtr: (value: Stitches.PropertyValue<"gridTemplateRows">) => ({
      gridTemplateRows: value,
    }),
    gcg: (value: Stitches.PropertyValue<"columnGap">) => ({
      columnGap: value,
    }),
    grg: (value: Stitches.PropertyValue<"rowGap">) => ({
      rowGap: value,
    }),
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 1024px)",
    bp3: "(min-width: 1280px)",
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
    ...amberDark,
    headerGlassBackground: "rgba(100, 100, 100, .3)",
    hlPeach1: "hsl(0, 100%, 6.1%)",
    hlPeach2: "hsl(0, 100%, 7.6%)",
    hlPeach3: "hsl(0, 100%, 10.2%)",
    hlPeach4: "hsl(0, 100%, 12.4%)",
    hlPeach5: "hsl(0, 100%, 14.6%)",
    hlPeach6: "hsl(0, 100%, 17.1%)",
    hlPeach7: "hsl(0, 100%, 21.6%)",
    hlPeach8: "hsl(0, 100%, 25.5%)",
    hlPeach9: "hsl(0, 100%, 57.0%)",
    hlPeach10: "hsl(0, 100%, 64.0%)",
    hlPeach11: "hsl(0, 90%, 49.8%)",
    hlPeach12: "hsl(0, 100%, 93.2%)",

    hlAmber1: "hsl(51, 100%, 6.1%)",
    hlAmber2: "hsl(51, 100%, 7.6%)",
    hlAmber3: "hsl(51, 100%, 10.2%)",
    hlAmber4: "hsl(51, 100%, 12.4%)",
    hlAmber5: "hsl(51, 100%, 14.6%)",
    hlAmber6: "hsl(51, 100%, 17.1%)",
    hlAmber7: "hsl(51, 100%, 21.6%)",
    hlAmber8: "hsl(51, 100%, 25.5%)",
    hlAmber9: "hsl(51, 100%, 57.0%)",
    hlAmber10: "hsl(51, 100%, 64.0%)",
    hlAmber11: "hsl(51, 90%, 49.8%)",
    hlAmber12: "hsl(51, 100%, 93.2%)",

    hlGrass1: "hsl(100, 100%, 6.1%)",
    hlGrass2: "hsl(100, 100%, 7.6%)",
    hlGrass3: "hsl(100, 100%, 10.2%)",
    hlGrass4: "hsl(100, 100%, 12.4%)",
    hlGrass5: "hsl(100, 100%, 14.6%)",
    hlGrass6: "hsl(100, 100%, 17.1%)",
    hlGrass7: "hsl(100, 100%, 21.6%)",
    hlGrass8: "hsl(100, 100%, 25.5%)",
    hlGrass9: "hsl(100, 100%, 57.0%)",
    hlGrass10: "hsl(100, 100%, 64.0%)",
    hlGrass11: "hsl(100, 90%, 49.8%)",
    hlGrass12: "hsl(100, 100%, 93.2%)",

    hlSkyblue2: "hsl(205, 100%, 7.6%)",
    hlSkyblue3: "hsl(205, 100%, 10.2%)",
    hlSkyblue4: "hsl(205, 100%, 12.4%)",
    hlSkyblue5: "hsl(205, 100%, 14.6%)",
    hlSkyblue6: "hsl(205, 100%, 17.1%)",
    hlSkyblue7: "hsl(205, 100%, 21.6%)",
    hlSkyblue8: "hsl(205, 100%, 25.5%)",
    hlSkyblue9: "hsl(205, 100%, 57.0%)",
    hlSkyblue10: "hsl(205, 100%, 64.0%)",
    hlSkyblue11: "hsl(205, 90%, 49.8%)",
    hlSkyblue12: "hsl(205, 100%, 93.2%)",
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
