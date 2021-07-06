import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

import globalStyles from "../../theme/globalStyle";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content={''} />
    <meta name="description" content={''} />
   
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
