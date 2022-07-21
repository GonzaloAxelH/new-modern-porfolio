import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
