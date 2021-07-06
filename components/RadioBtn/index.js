import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioBtnLabel from './RadioBtnLabel';

const CustomCheckbox = ({ className, label, name, value, extraLabel, onClick, checked, color, border, ta, fontSize,
  fontWeight, lh, checkBoxTop }) => (
  <RadioBtnLabel color={color} border={border} ta={ta} fontSize={fontSize} fontWeight={fontWeight} lh={lh} checkBoxTop={checkBoxTop}>
    {label} 
    {extraLabel !== '' ?
      <p>({extraLabel})</p>
      : ''
    }
    
    <input type="radio" className={className} value={value} name={name} onClick={() => {onClick()}} checked={checked}/>
    <span />
  </RadioBtnLabel>
);

CustomCheckbox.defaultProps = {
	className:'',	
  label: '',
  extraLabel: ''
};

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  extraLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomCheckbox;
