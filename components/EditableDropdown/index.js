import styled from 'styled-components';
import React from 'react';
import { GetMarginPadding, GetFontProps, GetBorder, GetSize } from '../CommonProps';
import { FaAngleDown } from 'react-icons/fa';

const StyledDropDown =  styled.div`
position: relative;
display: inline;
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
  border: 1px solid #d7d7d8;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${props => props.height && { height: props.height }}
  ${props => props.float && { float: props.float }}
  ${props => props.fontSize && { fontSize: props.fontSize }}
  ${props => props.color && { height: props.color }}
  ${props => GetBorder(props)}
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

const EditableDropdown = ({ placeholder, value,downArrow, ...rest }) => (
  <StyledDropDown>
  <EditableDropdownStyle value={value !== undefined ? value: ''} {...rest} placeholder={placeholder} />
  {downArrow != false ?<FaAngleDown/>:null}
  </StyledDropDown>
);


EditableDropdown.defaultProps = {
  size: 'default',
  btnType: 'primary',
  border: '1px solid #d7d7d8',
  fontFamily: 'inter',
  fontWeight: 400,
  lh: '1',
  bc: '#d7d7d8',
  bg: 'transparent',
  ta: 'left',
  borderRadius: '5px',
  p: '13px 20px',
  fontSize: '16',
  height: '45px'
};

export default EditableDropdown;
