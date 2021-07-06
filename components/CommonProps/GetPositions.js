import styled, {css} from 'styled-components';

const GetPositions = (props) => css`
  ${props.zIndex && { zIndex: props.zIndex }}
  ${props.top && { top: props.top }}
  ${props.bottom && { bottom: props.bottom }}
  ${props.left && { left: props.left }}
  ${props.right && { right: props.right }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.zIndex && { zIndex: props.zIndex.sm }}
    ${props.top && { top: props.top.sm }}
    ${props.bottom && { bottom: props.bottom.sm }}
    ${props.left && { left: props.left.sm }}
    ${props.right && { right: props.right.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.zIndex && { zIndex: props.zIndex.md }}
    ${props.top && { top: props.top.md }}
    ${props.bottom && { bottom: props.bottom.md }}
    ${props.left && { left: props.left.md }}
    ${props.right && { right: props.right.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.zIndex && { zIndex: props.zIndex.lg }}
    ${props.top && { top: props.top.lg }}
    ${props.bottom && { bottom: props.bottom.lg }}
    ${props.left && { left: props.left.lg }}
    ${props.right && { right: props.right.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.zIndex && { zIndex: props.zIndex.xs }}
    ${props.top && { top: props.top.xs }}
    ${props.bottom && { bottom: props.bottom.xs }}
    ${props.left && { left: props.left.xs }}
    ${props.right && { right: props.right.xs }}
  }
`;

export default GetPositions;
