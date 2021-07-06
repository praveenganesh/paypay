import { css } from 'styled-components';

const GetAlignSelfProps = (props) => css`
  ${props.alignSelf && { alignSelf: props.alignSelf }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.alignSelf && { alignSelf: props.alignSelf.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.alignSelf && { alignSelf: props.alignSelf.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.alignSelf && { alignSelf: props.alignSelf.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.alignSelf && { alignSelf: props.alignSelf.xs }}
  }
`;

export default GetAlignSelfProps;
