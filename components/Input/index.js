import styled from "styled-components";
import {
  GetSize,
  GetBorder,
  GetFontProps,
  GetMarginPadding
} from "../CommonProps";

const Input = styled.input`
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
  float: ${props => props.float};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  border: solid 1px ${props => props.borderColor};
  color: ${props => props.textColor};
  ${props => props.display && { display: props.display }}
  ${props => props.bg && { background: props.bg }}
  ${props => props.border && { border: props.border }}

  ${props => props.borderBottom && { border: 0 }}
  ${props => props.borderBottom && { outline: 0 }}
  ${props =>
    props.borderBottom && { "border-bottom": "solid 1px " + props.borderColor }}
  ${props => props.b && { border: props.b }}
  ${props => props.bb && { borderBottom: props.bb }}
  ${props => props.bt && { borderTop: props.bt }}
  ${props => GetSize(props)}
  ${props => GetBorder(props)}
  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
  ${props =>
    props.error && {
      border: "1px solid #fb7676",
      background: "#fff0f0"
    }}
  &:hover, &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${props => props.placeHolderColor};
    opacity : ${props => props.placeHolderpacity};
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance:textfield; /* Firefox */
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`;

Input.defaultProps = {
  width: "100%",
  height: "38px",
  borderRadius: "2px",
  backgroundColor: "#FFF",
  borderColor: "rgba(151, 151, 151, 0.47)"
};

export default Input;
