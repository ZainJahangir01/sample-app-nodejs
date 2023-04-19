import { GlobalStyles } from "@bigcommerce/big-design";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/header";
import SessionProvider from "../context/session";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
