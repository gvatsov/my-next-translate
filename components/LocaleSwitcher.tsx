import React from "react";
import StyledCircularProgress from "./StyledCircularProgress";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import CookieService from "services/persist/CookieService";
import locales from "locales";

type Props = {
  locale: string;
};

const LocaleSwitcher: React.FC<Props> = ({ locale }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const localeCookie = event.target.value;
    CookieService.storeCookie("client-locale", localeCookie);
    window.location.reload();
  };

  if (!locale) return <StyledCircularProgress />;

  return (
    <FormControl>
      <InputLabel id="simple-select-label">Locale</InputLabel>
      <Select labelId="simple-select-label" id="simple-select" label="Locale" value={locale} onChange={handleChange}>
        {locales.map(locale => (
          <MenuItem key={locale} value={locale}>
            {locale}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Add Locale to cookies</FormHelperText>
    </FormControl>
  );
};

export default LocaleSwitcher;
