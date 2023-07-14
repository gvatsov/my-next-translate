import { CacheProvider } from "@emotion/react";
import { GlobalStyles, PaletteMode, Direction } from "@mui/material";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { useMemo } from "react";
import createEmotionCache from "./utils/createEmotionCache";
import getComponents from "./utils/getComponents";
import getPalette from "./utils/getPalette";
import getGlobalStyles from "./utils/getGlobalStyles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import getTypography from "./utils/getTypography";
import ThemeContextProvider from "contexts/ThemeContext";
import useLanguage from "hooks/useLanguage";

export const theme = (mode: PaletteMode, direction: Direction) => {
  const palette = getPalette(mode);
  const components = getComponents(mode);
  const typography = getTypography();

  return {
    name: mode,
    direction,
    palette,
    components,
    typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800,
      },
    },
  };
};

export default function ThemeProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  const { isRtl } = useLanguage(locale);
  const [direction, setDirection] = React.useState<Direction>("ltr");
  const clientSideEmotionCache = React.useMemo(() => createEmotionCache(direction), [direction]);

  //=== MODE ====//
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  React.useEffect(() => {
    if (mode && mode !== document.body.dataset.theme) {
      document.body.dataset.theme = mode;
    }
  }, [mode]);

  // use this for mode change
  // const memoMode = React.useMemo(
  //   () => ({
  //     handleColorMode: (newMode: PaletteMode) => {
  //       setMode(newMode);
  //     },
  //     mode,
  //   }),
  //   [mode]
  // );
  //=== MODE ====//

  //=== DIRECTION ====//
  const memoDirection = React.useMemo(
    () => ({
      handleSetDirection: (newDirection: Direction) => {
        setDirection(newDirection);
      },
      direction,
    }),
    [direction]
  );

  React.useEffect(() => {
    if (isRtl) {
      document.body.setAttribute("dir", "rtl");
      memoDirection.handleSetDirection("rtl");
    } else {
      document.body.removeAttribute("dir");
      memoDirection.handleSetDirection("ltr");
    }
    document.getElementsByTagName("html")[0].setAttribute("lang", locale);
  }, [locale, isRtl, memoDirection]);

  //=== DIRECTION ====//

  const themeObject = useMemo(() => createTheme(theme(mode, direction)), [mode, direction]);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <MuiThemeProvider theme={themeObject}>
        <ThemeContextProvider>
          <GlobalStyles styles={getGlobalStyles(mode)} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider>
        </ThemeContextProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
}
