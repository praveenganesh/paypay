import { css } from 'styled-components';

const GetHiddenProps = (props) => css`
  @media only screen and (min-width: ${props.theme.breakpoints('sm')}) {
    ${props.hiddenSm && { display: 'none' }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('md')}) {
    ${props.hiddenMd && { display: 'none' }}
  }
  @media only screen and (min-width: ${props.theme.breakpoints('lg')}) {
    ${props.hiddenLg && { display: 'none' }}
  }
  @media only screen and (max-width: ${props.theme.breakpoints('sm')}) {
    ${props.hiddenXs && { display: 'none' }}
  }
`;

export default GetHiddenProps;
