import { css } from 'styled-components';

const GetAlignItemsProps = (props) => css`
  ${props.alignItems && { alignItems: props.alignItems }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.alignItems && { alignItems: props.alignItems.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.alignItems && { alignItems: props.alignItems.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.alignItems && { alignItems: props.alignItems.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.alignItems && { alignItems: props.alignItems.xs }}
  }
`;

export default GetAlignItemsProps;
