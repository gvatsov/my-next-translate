import { font } from "./theme-values";

const defaultFonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
];

const getTypography = () => ({
  fontFamily: [font, ...defaultFonts].join(","),
  h1: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    margin: 0,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  h3: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    margin: 0,
  },
  h4: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: 0,
  },
  h5: {
    fontSize: "1rem",
    margin: 0,
  },
  h6: {
    fontSize: "1rem",
    margin: 0,
  },
});

export default getTypography;
