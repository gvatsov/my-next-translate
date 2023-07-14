import type { AppProps } from "next/app";
import ThemeProvider from "theme";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <ThemeProvider locale={pageProps.locale}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
