import Link from "next/link";
import React from "react";
import {
  AppBar,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CookieService from "services/persist/CookieService";
import StyledCircularProgress from "./StyledCircularProgress";
import { styled } from "@mui/system";

type Props = {
  children: React.ReactNode;
};

const links = [
  { href: "/", label: "Sports" },
  { href: "/casino", label: "Casino" },
  { href: "/promotions", label: "Promotions" },
];

const Layout: React.FC<Props> = ({ children }) => {
  const [locale, setLocale] = React.useState<string | null>(null);

  React.useEffect(() => {
    const localeCookie = CookieService.retrieveCookie("client-locale") || "en";
    setLocale(localeCookie);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const localeCookie = event.target.value;
    CookieService.storeCookie("client-locale", localeCookie);
    window.location.reload();
  };

  return (
    <StyledMainContainer>
      <StyledAppBar position="sticky">
        <StyledGridContainer container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {links.map(link => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </Grid>
          <Grid item>
            {locale ? (
              <FormControl>
                <InputLabel id="simple-select-label">Locale</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  label="Locale"
                  value={locale}
                  onChange={handleChange}
                >
                  <MenuItem value="en">en</MenuItem>
                  <MenuItem value="de">de</MenuItem>
                  <MenuItem value="fr">fr</MenuItem>
                  <MenuItem value="ar">ar</MenuItem>
                </Select>
                <FormHelperText>Add Locale to cookies</FormHelperText>
              </FormControl>
            ) : (
              <StyledCircularProgress />
            )}
          </Grid>
        </StyledGridContainer>
      </StyledAppBar>

      <Container>{children}</Container>
    </StyledMainContainer>
  );
};

export default Layout;

const StyledMainContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  padding: "20px",
}));
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  top: "0",
  zIndex: 1000,
}));
