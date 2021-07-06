import styled from 'styled-components';
import React from 'react';
import { GetMarginPadding, GetFontProps, GetBorder, GetSize, GetHiddenProps, GetWidthHeightProps } from '../CommonProps';

const sizes = {
  default: {
    padding: '.375rem .75rem',
    fontSize: '1rem'
  },
  small: {
    padding: '.25rem .5rem',
    fontSize: '.875rem'
  },
  large: {
    padding: '.5rem 1rem',
    fontSize: '1.25rem'
  },
  block: {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem'
  },
};

const btnType = (props, type) => {
  const typeObj = {
    primary: {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${props.theme.colors.primary}`,
      borderColor: `${props.theme.colors.primary}`
    },
    secondary: {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${props.theme.colors.secondary}`,
      borderColor: `${props.theme.colors.secondary}`
    },
    outline: {
      color: `${props.theme.colors.primary}`,
      backgroundColor: `${props.theme.colors.white}`,
      borderColor: `${props.theme.colors.primary}`
    },
    custom: {
      color: `${props.color}`,
      backgroundColor: `${props.bg}`,
      borderColor: `${props.bc}`
    },
    grey: {
      color: `${props.theme.colors.white}`,
      backgroundColor: `${props.theme.colors.gray}`,
      borderColor: `${props.theme.colors.gray}`
    },
    outlineCustom: {
      color: `${props.theme.colors[props.color]}`,
      backgroundColor: `${props.theme.colors[props.bg]}`,
      borderColor: `${props.theme.colors[props.bc]}`,
    },
    link: {
      color: `${props.theme.colors[props.color]}`,
      border: 'none',
      background: 'none'
    }
  };

  return typeObj[type];
};

const ButtonStyle = styled.button`
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius:5px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  ${props => props.float && { float: props.float }}
  ${props => props.lS && { letterSpacing: props.lS }}
  ${props => props.width && { width: props.width }}
  ${props => props.p && { padding: props.p }}
  ${props => props.bS && { boxShadow: props.bS }}
  ${props => props.display && { display: props.display }}
  ${props => props.fontWeight && { fontWeight: props.fontWeight }}
  ${props => props.zIndex && { zIndex: props.zIndex }}
  ${props => props.cursor && { cursor: props.cursor }}
  ${props => props.position && { position: props.position }}
  ${props => props.top && { top: props.top }}
  ${props => props.left && { left: props.left }}
  ${props => props.borderColor && { borderColor: props.borderColor }}
  
 
  ${props => GetBorder(props)}
  ${props => GetSize(props)}
  ${props => GetFontProps(props)}

  ${props => sizes[props.size]};
  ${props => btnType(props, props.btnType)};

  ${props => GetMarginPadding(props)}
  ${props => GetHiddenProps(props)}
  ${props => GetWidthHeightProps(props)}
  ${props => props.bg && { background: props.bg }}
  ${props => props.color && { color: props.color }}
  ${props => props.b && { border: props.b }}
  @media only screen and (max-width: ${props => props.theme.breakpoints('sm')}) {
    ${props => props.smFull && { width: "100%" }}
  }
`;
const Button = (props) => (
    <ButtonStyle type={props.submit?"submit":"button"} onClick={props.onClick} {...props} />
  );
ButtonStyle.defaultProps = {
  size: 'dafault',
  btnType: 'primary',
  border: '1px solid',
  fontFamily: 'inter',
  fontWeight: 400,
  lh: '1',
  bc: 'transparent',
  bg: 'transparent',
  ta: 'center',
  borderRadius: '0',
  p: '15px 20px',
  fontSize: '14'
};

export default Button;
