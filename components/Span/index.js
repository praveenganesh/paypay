import styled from "styled-components";
import {
  GetMarginPadding,
  GetFontProps,
  GetBoxsizing,
  GetHiddenProps,
  GetWidthHeightProps,
} from "../CommonProps";

const types = {
  default: {
    textDecoration: "none"
  },
  lt: {
    textDecoration: "line-through"
  },
  grayText: {
    color: "gray"
  }
};

const StyledSpan = styled.span`
  float: ${props => props.float};
  ${props => props.display && { display: props.display }}
  ${props => props.width && { width: props.width }}
  ${props => props.height && { height: props.height }}
  ${props => props.fontSize && { fontSize: props.fontSize }}
  ${props => props.color && { color: props.color }}
  ${props => props.pt && { paddingTop: props.pt }}
  ${props => props.bb && { borderBottom: props.bb }}
  ${props => props.cursor && { cursor: props.cursor }}
  ${props => props.position && { position: props.position }}
  ${props => props.bg && { backgroundColor: props.bg }}
  ${props => props.mr && { marginRight: props.mr }}
  ${props => props.ml && { marginLeft: props.ml }}
  ${props => props.mt && { marginTop: props.mt }}
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.minHeight && { minHeight: props.minHeight }}
  ${props => props.fontWeight && { fontWeight: props.fontWeight }}

  
  ${props => types[props.type]};

  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
  ${props => GetBoxsizing(props)}
  ${props => GetHiddenProps(props)}
  @media only screen and (max-width: ${props =>
    props.theme.breakpoints("sm")}) {
  ${props => props.smTa && { textAlign: props.smTa }} 
  ${props => props.smWidth && { width: props.smWidth }}
  }
  ${props => props.textDecoration && { textDecoration: props.textDecoration }}
`;

StyledSpan.defaultProps = {
  type: "default",
  color: "#000",
  fontSize: "14px",
  ta: "left",
  fontFamily: "os",
  va: "middle",
  float: "none",
  fontWeight: "normal"
};

export default StyledSpan;
