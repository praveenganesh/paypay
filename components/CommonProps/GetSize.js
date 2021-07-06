import styled, {css} from 'styled-components';

const GetSize = (props) => css`
  ${props.height && { height: props.height }};
  ${props.width && { width: props.width }};
  @media only screen and (min-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.height && { height: props.height.sm }}
    ${props => props.width && { width: props.width.sm }}
  };
  @media only screen and (min-width: ${props => props.theme.breakpoints('md')}) {
    ${props => props.height && { height: props.height.md }}
    ${props => props.width && { width: props.width.md }}
  };
  @media only screen and (min-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.height && { height: props.height.lg }}
    ${props => props.width && { width: props.width.lg }}
  };
  @media only screen and (max-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.height && { height: props.height.xs }}
    ${props => props.width && { width: props.width.xs }}
  };
`;

export default GetSize;
