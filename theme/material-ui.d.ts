import { ISharedPalette, ISharedPaletteOptions, ISharedButtonPropsVariantOverrides } from "shared-mui-theme";

declare module "@mui/material/styles" {
  interface Palette extends ISharedPalette {}

  interface PaletteOptions extends ISharedPaletteOptions {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides extends ISharedButtonPropsVariantOverrides {}
}
