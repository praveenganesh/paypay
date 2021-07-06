import styled from 'styled-components';
import { GetMarginPadding, GetFontProps, GetBorder, GetSize } from '../CommonProps';

const Dropdown = styled.button`
  cursor: pointer;
  white-space: nowrap;
  text-align: left;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: url('/static/down-arrow.svg') no-repeat;
  background-position-x: right;
  background-size: contain;
  background-size: 15px 40px;
  width: 100%;
  color: #c9c9c9;
  // removing the important clause in the border prop
  // because it was preventing me from overriding the border prop
  // - vivek
  border: 1px solid #d7d7d8;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${props => props.height && { height: props.height }}
  ${props => props.width && { width: props.width }}
  ${props => props.p && { padding: props.p }}
  ${props => props.float && { float: props.float }}
  ${props => props.color && { color: props.color }}
  ${props => props.br && { borderRadius: props.br }}
  ${props => props.background && { background: props.background }}
  ${props => GetBorder(props)}
  ${props => GetSize(props)}
  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
  &:focus, &:hover {
    outline: none;
    + ul {
      display: block !important;
      ${props => props.hideDropDown && { display: 'none !important' }}
    }
  }
`;

Dropdown.defaultProps = {
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

export default Dropdown;
