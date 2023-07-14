import { alpha, ButtonProps, PaletteMode } from "@mui/material";
import { backgroundColor, primaryColor, textColor } from "./theme-values";

const getComponents = (mode: PaletteMode) => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "text" } as ButtonProps,
        style: { borderRadius: "0", ":hover": { background: "none" } },
      },
      {
        props: { variant: "contained" } as ButtonProps,
        style: { borderRadius: "0" },
      },
      {
        props: { variant: "outlined" } as ButtonProps,
        style: { borderRadius: "0" },
      },
    ],
    styleOverrides: {
      root: {
        "&.MuiButton-sizeMedium": {
          padding: ".5rem 1rem",
        },
        whiteSpace: "nowrap" as const,
        "&& .MuiLoadingButton-loadingIndicator": {
          color: primaryColor.main,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    } as const,
    styleOverrides: {
      root: {
        color: "inherit",
        "&& .MuiFilledInput-root": {
          height: 36,
          borderRadius: 0,
          "&::before": {
            border: 0,
          },
          "& input": {
            padding: ".6rem",
            fontSize: ".8rem",
            "&::placeholder": {
              opacity: 0.6,
            },
          },
        },
        "& label + .MuiFilledInput-root": {
          marginTop: "1.2rem",
        },
        "&& .MuiFormHelperText-root": {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
  MuiNativeSelect: {
    defaultProps: {
      variant: "outlined",
    } as const,
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        "&& .MuiOutlinedInput-root": {
          height: 50,
          borderRadius: 0,
          "& input": {
            padding: "14px",
          },
          "& select": {
            paddingTop: "14px",
            paddingBottom: "14px",
          },
        },
        "& .MuiOutlinedInput-root:not(.Mui-error)": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
          },
        },
        "& .MuiInputLabel-root.Mui-focused:not(.Mui-error)": {
          color: "inherit",
        },
        // remove autofill blue color
        "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active, & .MuiOutlinedInput-input:-webkit-autofill, & .MuiOutlinedInput-input:-webkit-autofill:hover, & .MuiOutlinedInput-input:-webkit-autofill:focus, & .MuiOutlinedInput-input:-webkit-autofill:active, & input[data-com-onepassword-filled='dark'],& select[data-com-onepassword-filled='dark'], & textarea[data-com-onepassword-filled='dark']":
          {
            "-webkit-box-shadow": `0 0 0 100px ${backgroundColor[mode].dark} inset !important`,
            backgroundColor: `${backgroundColor[mode].dark} !important`,
            backgroundClip: "content-box !important",
          },
      },
    },
  },
});

export default getComponents;
