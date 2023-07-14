import { PaletteMode } from "@mui/material";
import { backgroundColor, errorColor, primaryColor, secondaryColor, textColor } from "./theme-values";

const getPalette = (mode: PaletteMode) => ({
  mode,
  text: {
    primary: textColor[mode].primary,
    secondary: textColor[mode].secondary,
    disabled: textColor[mode].disabled,
  },
  error: {
    main: errorColor[mode].main,
  },
  primary: {
    main: primaryColor.main,
    contrastText: primaryColor.contrastText,
  },
  secondary: {
    light: secondaryColor.light,
    main: secondaryColor.main,
    dark: secondaryColor.dark,
    contrastText: secondaryColor.contrastText,
  },
  background: {
    paper: backgroundColor[mode].paper,
    default: backgroundColor[mode].default,
  },
  background_light: backgroundColor[mode].light,
  background_dark: backgroundColor[mode].dark,
  background_black: backgroundColor[mode].black,
  background_deposit: backgroundColor[mode].deposit,
  boxShadow: "rgb(0 0 0 / 30%)",
});

export default getPalette;
