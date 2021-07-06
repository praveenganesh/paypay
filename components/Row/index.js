import styled from "styled-components";
import {
  GetMarginPadding,
  GetMinHeightProps,
  GetAlignItemsProps,
  GetHiddenProps,
  GetWidthHeightProps
} from "../CommonProps";

const display = (props, type) => {
  const typeObj = {
    block: {
      display: `${props.display}`,
      clear: "both"
    },
    flex: {
      display: `${props.display}`,
      flexWrap: `${props.flexWrap}`,
      flexDirection: `${props.flexDirection}`,
      justifyContent: `${props.justifyContent}`,
      alignItems: `${props.alignItems}`
    }
  };

  return typeObj[type];
};

const Row = styled.div`
  box-sizing: border-box;
  margin-right: 0;
  margin-left: 0;

  ${props => display(props, props.display)};
  ${props => GetMarginPadding(props)}
  ${props => GetMinHeightProps(props)}
  ${props => GetAlignItemsProps(props)}
  ${props => GetWidthHeightProps(props)}
  ${props => GetHiddenProps(props)}

  ${props => props.height && { height: props.height }}
  ${props => props.color && { color: props.color }}
  ${props => props.jc && { justifyContent: props.jc }}
  ${props => props.bg && { background: props.theme.colors[props.bg] }}
  ${props => props.borderBottom && { borderBottom: props.borderBottom }}
  ${props => props.display && { display: props.display }}
  ${props => props.float && { float: props.float }}
  ${props => props.zIndex && { zIndex: props.zIndex }}
  ${props => props.maxHeight && { maxHeight: props.maxHeight }}
  ${props => props.bb && { borderBottom: props.bb }}
  ${props => props.bl && { borderLeft: props.bl }}
  ${props => props.cursor && { cursor: props.cursor }}
  ${props => props.border && { border: props.border }}
  
  ${props => props.jsc && { justifyContent: props.jsc }}
  ${props => props.position && { position: props.position }}
  &:before, &:after {
    box-sizing: border-box;
    display: table;
    content: " ";
  }

  &:after {
    clear: both;
  }

  @media only screen and (max-width: ${props =>
    props.theme.breakpoints("sm")}) {
      ${props => props.smWidth && { width: props.smWidth }}
      ${props => props.smJc && { justifyContent: props.smJc }}
    flex-wrap: wrap;
    ${props => props.smBorderBottom && { borderBottom: props.smBorderBottom }}
  }
`;

Row.defaultProps = {
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "flex-start",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative"
};

export default Row;
