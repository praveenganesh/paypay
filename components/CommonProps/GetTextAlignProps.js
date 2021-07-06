import styled, {css} from 'styled-components';

const GetTextAlignProps = (props) => css`
  ${props.ta && { textAlign: props.ta }}

  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.ta && { textAlign: props.ta.sm }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.ta && { textAlign: props.ta.md }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.ta && { textAlign: props.ta.lg }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.ta && { textAlign: props.ta.xs }}
  }
`;

export default GetTextAlignProps;
