import { createTheme, PaletteMode } from "@mui/material";
import { backgroundColor, primaryColor, textColor } from "./theme-values";

const getGlobalStyles = (mode: PaletteMode) => {
  const theme = createTheme();
  return {
    "p.casino_category-label": {
      backgroundColor: backgroundColor[mode].default,
      fontWeight: 700,
      lineHeight: "35px",
      fontSize: ".65rem",
      [theme.breakpoints.up("md")]: {
        lineHeight: "25px",
        fontSize: ".75rem",
      },
      "&.selected": {
        backgroundColor: primaryColor.main,
        color: theme.palette.common.black,
      },
    },
    ".casino_game-overlay_title": {
      paddingTop: "1.5vw",
    },
    ".casino_provider-box": {
      aspectRatio: "2/1",
      "&.selected": {
        filter:
          "brightness(0) saturate(100%) invert(79%) sepia(56%) saturate(1572%) hue-rotate(357deg) brightness(105%) contrast(90%) !important",
      },
    },
    ".rounded-btn": {
      borderRadius: "10px !important",
    },
    ".btn_header": {
      textDecoration: "none !important",
      fontWeight: "bold !important",
      lineHeight: "normal !important",
      height: "50px !important",
      "&& span": {
        color: `${primaryColor.contrastText} !important`,
      },
    },
    ".btn_login": {
      color: `${textColor.dark.primary} !important`,
      fontSize: "1rem !important",
      fontWeight: "600 !important",
      height: "50px !important",
    },
    ".header-mobile_appbar": {
      borderBottom: `.3rem solid ${primaryColor.main}`,
      backgroundColor: `${backgroundColor[mode].black} !important`,
    },
    ".header-mobile-btn_login": {
      color: `${textColor[mode].primary} !important`,
      textTransform: "uppercase" as const,
      padding: "0 1rem",
      "&& span ": {
        fontSize: "10px",
        paddingTop: "5px",
      },
    },
    ".header-mobile-btn_register": {
      borderRadius: "0 !important",
      boxShadow: "none !important",
      height: "56px !important",
    },
    ".header-mobile-btn_deposit": {
      borderRadius: "0 !important",
      boxShadow: "none !important",
      height: "56px !important",
      padding: "1rem .5rem !important",
    },
    ".casino_carousel": {
      [theme.breakpoints.up("md")]: {
        maxWidth: 1800,
        margin: "0 auto",
      },
      [theme.breakpoints.up(1800)]: {
        padding: "0 50px",
      },
    },
    ".casino_video-background": {
      backgroundColor: backgroundColor[mode].black,
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2),
      [theme.breakpoints.up("sm")]: {
        margin: 0,
      },
    },
    ".scroll-menu": {
      textTransform: "uppercase" as const,
      height: "45px",
    },
  };
};

export default getGlobalStyles;
