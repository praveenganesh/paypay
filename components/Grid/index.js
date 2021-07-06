import styled, { css } from "styled-components";
import Div from "../Div";
import {
  GetAlignSelfProps,
  GetMarginPadding,
  GetFontProps,
  GetMinHeightProps,
} from "../CommonProps";

const display = (props, type, colSize) => {
  const typeObj = {
    block: {
      width: `${props.theme.col[colSize]}`,
      float: "left",
      position: "relative",
    },
    flex: {
      maxWidth: `${props.theme.col[colSize]}`,
      flex: `0 0 ${props.theme.col[colSize]}`,
      width: "100%",
    },
    flexEqual: {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%",
      width: "100%",
    },
  };

  return typeObj[type];
};

const checkTypeOf = (val) => typeof val;

const Grid = styled(Div).attrs(({ id }) => {
  ({
    id: id,
  });
})`

  ${(props) =>
    typeof props.col === "string"
      ? css`
           {
            ${display(props, props.display, props.col)};
          }
        `
      : css`{
    @media only screen and (min-width: ${props.theme.breakpoints("sm")}) {
      ${display(props, props.display, props.col.sm)};
    }
    @media only screen and (min-width: ${props.theme.breakpoints("md")}) {
      ${display(props, props.display, props.col.md)};
    }
    @media only screen and (min-width: ${props.theme.breakpoints("lg")}) {
      ${display(props, props.display, props.col.lg)};
    }
    @media only screen and (max-width: ${props.theme.breakpoints("sm")}) {
      ${display(props, props.display, props.col.xs)};
        ${
          props.display === "flexEqual" && {
            flexBasis: "inherit",
            flex: `0 0 ${props.theme.col[props.col.xs]}`,
          }
        }`}
  width:  ${(props) => props.width};
  height:  ${(props) => props.height};
  float:  ${(props) => props.float};
  ${(props) => props.visibility && { visibility: props.visibility }}
  ${(props) => props.border && { border: props.border }}
  ${(props) => props.borderTop && { borderTop: props.borderTop }}
  ${(props) => props.borderRight && { borderRight: props.borderRight }}
  ${(props) => props.borderLeft && { borderLeft: props.borderLeft }}
  ${(props) => props.borderRadius && { borderRadius: props.borderRadius }}
  ${(props) => GetAlignSelfProps(props)}
  ${(props) => GetMarginPadding(props)}
  ${(props) => GetFontProps(props)}
  ${(props) => GetMinHeightProps(props)}
  ${(props) => props.br && { borderRadius: props.br }}
  @media only screen and (max-width: ${(props) =>
    props.theme.breakpoints("sm")}) {
    ${(props) => props.smTa && { textAlign: props.smTa }} 
   
    }
    ${(props) => props.smHeight && { height: props.smHeight }}
`;

Grid.defaultProps = {
  display: "block",
  col: { xs: 12, sm: 12, md: 12, lg: 12 },
};

export default Grid;
