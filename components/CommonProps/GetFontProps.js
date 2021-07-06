import styled, { css } from "styled-components";

const GetFontProps = props => css`
  ${props.color && { color: props.theme.colors[props.color] }}
  ${props.fontFamily && {
    fontFamily: props.theme.fontFamily[props.fontFamily]
  }}
  ${props.fontWeight && { fontWeight: props.fontWeight }}
  ${props.fontSize && { fontSize: props.theme.fontSizes[props.fontSize] }}
  ${props.lh && { lineHeight: props.lh }}
  ${props.va && { verticalAlign: props.va }}
  ${props.ta && { textAlign: props.ta }}
  ${props.td && { textDecoration: props.td }}
  ${props.ls && { letterSpacing: props.ls }}
  ${props.tt && { textTransform: props.tt }}
  ${props.td && { textDecoration: props.td }}
  ${props.wb && { wordBreak: props.wb }}
  ${props.fs && { fontStyle: props.fs }}

  @media only screen and (min-width: ${props.theme.breakpoints("sm")}) {
    ${props.fontSize && { fontSize: props.theme.fontSizes[props.fontSize.sm] }}
    ${props.fontWeight && { fontWeight: props.fontWeight.sm }}
    ${props.ta && { textAlign: props.ta.sm }}
    ${props.td && { textDecoration: props.td.sm }}
    ${props.lh && { lineHeight: props.lh.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints("md")}) {
    ${props.fontSize && { fontSize: props.theme.fontSizes[props.fontSize.md] }}
    ${props.fontWeight && { fontWeight: props.fontWeight.md }}
    ${props.ta && { textAlign: props.ta.md }}
    ${props.td && { textDecoration: props.td.md }}
    ${props.lh && { lineHeight: props.lh.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints("lg")}) {
    ${props.fontSize && { fontSize: props.theme.fontSizes[props.fontSize.lg] }}
    ${props.fontWeight && { fontWeight: props.fontWeight.lg }}
    ${props.ta && { textAlign: props.ta.lg }}
    ${props.td && { textDecoration: props.td.lg }}
    ${props.lh && { lineHeight: props.lh.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints("sm")}) {
    ${props.fontSize && { fontSize: props.theme.fontSizes[props.fontSize.xs] }}
    ${props.fontWeight && { fontWeight: props.fontWeight.xs }}
    ${props.ta && { textAlign: props.ta.xs }}
    ${props.td && { textDecoration: props.td.xs }}
    ${props.lh && { lineHeight: props.lh.xs }}
  }
`;

export default GetFontProps;
