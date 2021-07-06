import styled from "styled-components";
import {
  GetMarginPadding,
  GetBoxsizing,
  GetTextAlignProps,
  GetHiddenProps,
  GetWidthHeightProps
} from "../CommonProps";

const Div = styled.div.attrs(({ id }) => ({
  id
}))`
  position: relative;
  display: block;
  ${props => props.bg && { background: props.theme.colors[props.bg] }}
  ${props => props.alignSelf && { alignSelf: props.alignSelf }}
  ${props => props.height && { height: props.height }}
  ${props => props.width && { width: props.width }}
  ${props => props.of && { overflow: props.of }}
  ${props => props.ofY && { overflowY: props.ofY }}
  ${props => props.br && { borderRadius: props.br }}
  ${props => props.b && { border: props.b }}
  ${props => props.borderLeft && { borderLeft: props.borderLeft }}
  ${props => props.borderBottom && { borderBottom: props.borderBottom }}
  ${props => props.borderTop && { borderTop: props.borderTop }}
  ${props => props.borderRight && { borderRight: props.borderRight }}
  ${props =>
    props.boxShadow && { boxShadow: props.theme.shadows[props.boxShadow] }}
  ${props => props.float && { float: props.float }}
  ${props => props.boxShadow && { boxShadow: props.boxShadow }}
  ${props => props.jc && { justifyContent: props.jc }}
  ${props => props.maxHeight && { maxHeight: props.maxHeight }}
  ${props => props.minHeight && { minHeight: props.minHeight }}
  ${props => props.visibility && { visibility: props.visibility }}
  ${props => props.cursor && { cursor: props.cursor }}
  ${props => props.userSelect && { userSelect: props.userSelect }}
  ${props => props.display && { display: props.display }}
  ${props =>
    props.backgroundColor && { backgroundColor: props.backgroundColor }}

  ${props => GetMarginPadding(props)}
  ${props => GetBoxsizing(props)}
  ${props => GetTextAlignProps(props)}
  ${props => GetHiddenProps(props)}
  ${props => GetWidthHeightProps(props)}
  @media only screen and (max-width: ${props =>
    props.theme.breakpoints("sm")}) {
    ${props => props.smHeight && { height: props.smHeight }}
    ${props => props.smWidth && { width: props.smWidth }}
  }
`;

export default Div;
