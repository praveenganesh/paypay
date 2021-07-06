import styled from "styled-components";
import Label from "../Label";

const CheckBoxLabel = styled(Label)`
  display: inline-block;
  position: relative;
  padding-left: 35px;
  padding-right: 25px;
  padding-top: 2px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 0;
    top: ${props => props.checkBoxTop};
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid #6c33b5;
    border: 1px solid ${props => props.border};
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
  p {
    color: ${props =>
      props.color ? props.color : props.theme.colors["color999999"]};
    font-size: 12px;
    margin-top: 5px;
  }
  &:hover input ~ span {
    background-color: ${props => props.theme.colors[props.display]};
  }
  input:checked ~ span {
    background-color: transparent;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 3px;
    left: 3px;
    width: 7px;
    height: 7px;
    border-radius: 2px;
    background: #5f5f5f;
  }
`;

export default CheckBoxLabel;
