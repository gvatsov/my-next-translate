import React from "react";
import { Direction, TextField, styled, useMediaQuery, useTheme } from "@mui/material";

interface IThemeContext {
  mediaQueries: {
    isMobile: boolean | null;
    isMobileSm: boolean | null;
    isUpSm: boolean | null;
    isLarge: boolean | null;
  };
  direction: Direction;
}

const initialState: IThemeContext = {
  mediaQueries: {
    isMobile: null,
    isMobileSm: null,
    isUpSm: null,
    isLarge: null,
  },
  direction: "ltr",
};

export const ThemeContext = React.createContext<IThemeContext>(initialState);

interface IProps {
  children?: React.ReactNode;
}

const ThemeContextProvider: React.FC<IProps> = ({ children }) => {
  const theme = useTheme();

  const isMobileSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const mediaQueries = React.useMemo(() => {
    if (!isMobile && !isMobileSm && !isUpSm && !isLarge) {
      return { isMobile: null, isMobileSm: null, isUpSm: null, isLarge: null };
    }
    return { isMobile, isMobileSm, isUpSm, isLarge };
  }, [isMobile, isMobileSm, isUpSm, isLarge]);

  return <ThemeContext.Provider value={{ mediaQueries, direction: theme.direction }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

export const StyledPrefixTextField = styled(TextField)(({ theme }) => ({
  width: 75,
  "&& input": {
    padding: "4px 0",
    margin: "10px 0",
  },
  "& .MuiInputBase-root input": {
    borderRight: `1px solid ${theme.palette.text.disabled}`,
  },
}));
