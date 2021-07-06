import { css } from "styled-components";

const GetMinHeightProps = props => css`
  ${props.minHeight && { minHeight: props.minHeight }}
  @media only screen and (min-width: ${props.theme.breakpoints("sm")}) {
    ${props.minHeight && { minHeight: props.minHeight.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints("md")}) {
    ${props.minHeight && { minHeight: props.minHeight.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints("lg")}) {
    ${props.minHeight && { minHeight: props.minHeight.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints("sm")}) {
    ${props.minHeight && { minHeight: props.minHeight.xs }}
  }
`;

export default GetMinHeightProps;
