import styled from "styled-components";
import React from "react";
import {
  GetMarginPadding,
  GetFontProps,
  GetBorder,
  GetSize
} from "../CommonProps";

const StyledDropDown = styled.div`
  position: relative;
  display: inline;
  ${props => props.width && { width: props.width }}
`;

const EditableDropdownStyle = styled.input`
  cursor: pointer;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  width: 100%;
  color: black;
  // removing the important clause in the border prop
  // because it was preventing me from overriding the border prop
  // - vivek
  border: 1px solid lightgray;
  overflow: hidden;
  text-overflow: ellipsis; 
  border-radius: 3px;
  white-space: nowrap; 
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: lightgray;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: lightgray;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: lightgray;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: lightgray;
  }
  ${props => props.height && { height: props.height }}
  ${props => props.float && { float: props.float }}
  ${props => props.fontSize && { fontSize: props.fontSize }}
  ${props => props.color && { height: props.color }}
  ${props => props.width && { width: props.width }}
  ${props => GetSize(props)}
  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}

  // &:focus, &:hover {
  //   outline: none;
  //   + ul {
  //     display: block !important;
  //   }
  // }
`;

const EditableDropdown = ({ placeholder, value, width, ...rest }) => (
  <StyledDropDown width={width}>
    <EditableDropdownStyle
      width={width}
      value={value !== undefined ? value : ""}
      {...rest}
      placeholder={placeholder}
    />
  </StyledDropDown>
);

EditableDropdown.defaultProps = {
  size: "default",
  btnType: "primary",
  border: "1px solid lightgray",
  fontFamily: "os",
  fontWeight: 400,
  lh: "1",
  bc: "#d7d7d8",
  bg: "transparent",
  ta: "left",
  borderRadius: "5px",
  p: "13px 20px",
  fontSize: "16",
  height: "35px"
};

export default EditableDropdown;
