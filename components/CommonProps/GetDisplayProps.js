import styled, {css} from 'styled-components';

const GetDisplayProps = (props) => css`
  ${props => props.display && { display: props.display }}
  
  @media only screen and (min-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.display && { display: props.display.sm }}
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints('md')}) {
    ${props => props.display && { display: props.display.md }}
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints('lg')}) {
    ${props => props.display && { display: props.display.lg }}
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.display && { display: props.display.xs }}
  }
`;

export default GetDisplayProps;
