import styled, {css} from 'styled-components';

const GetWidthHeightProps = (props) => css`
  ${props.height && { height: props.height }}
  ${props.width && { width: props.width }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.height && { height: props.height.sm }}
    ${props.width && { width: props.width.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.height && { height: props.height.md }}
    ${props.width && { width: props.width.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.height && { height: props.height.lg }}
    ${props.width && { width: props.width.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.height && { height: props.height.xs }}
    ${props.width && { width: props.width.xs }}
  }
`;

export default GetWidthHeightProps;
