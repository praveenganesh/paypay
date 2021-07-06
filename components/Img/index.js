import styled from 'styled-components';
import { GetMarginPadding,GetPositions, GetBorder, GetWidthHeightProps, GetHiddenProps } from '../CommonProps';



const Img = styled.img`
  max-width: 100%;

  display: ${props => props.display};
  float: ${props => props.float};
  cursor: ${props => props.cursor};
  background-size: ${props => props.backgroundSize};

  ${props => GetMarginPadding(props)}
  ${props => GetPositions(props)}
  ${props => GetBorder(props)}
  ${props => GetWidthHeightProps(props)}
  ${props => GetHiddenProps(props)}
  @media only screen and (max-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.smHeight && { height: props.smHeight }}
  }
  ${props => props.position && { position: props.position }}
`;

Img.defaultProps = {
  float: 'none',
  height: 'auto',
  display: 'block',
  width: 'auto'
};

export default Img;
