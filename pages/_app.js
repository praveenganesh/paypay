import React from "react";
import { ThemeProvider } from "styled-components";
import App from "next/app";
import theme from "../theme";
import "../theme/anttd.less"

class MyApp extends App {
  constructor() {
    super();
  }

  render() {
    // this.storeUserDetails();
    const { Component, pageProps } = this.props;
    return (
      <>
        {
          <ThemeProvider theme={theme}>
            <>
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        }
      </>
    );
  }
}

export default MyApp;
