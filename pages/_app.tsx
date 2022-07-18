import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
