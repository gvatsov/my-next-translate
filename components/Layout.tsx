import Link from "next/link";
import React from "react";
import { AppBar, Container, Grid, styled } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import LocaleSwitcher from "./LocaleSwitcher";

const links = [
  { href: "/", label: "Sports" },
  { href: "/casino", label: "Casino" },
  { href: "/promotions", label: "Promotions" },
];

type Props = {
  children: React.ReactNode;
  locale: string;
};

const Layout: React.FC<Props> = ({ children, locale }) => {
  const { t } = useTranslation("header");

  return (
    <StyledMainContainer>
      <StyledAppBar position="sticky">
        <StyledGridContainer container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {links.map(link => (
              <Link href={link.href} key={link.href}>
                {t(`header:${link.label}`)}
              </Link>
            ))}
          </Grid>
          <Grid item>
            <LocaleSwitcher locale={locale} />
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
