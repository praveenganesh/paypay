import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckIcon = ({ fill, width, height, mr, va }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 38 38" fill="none">
    <path d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z" fill="#08C25E"/>
    <path d="M26.2381 14.0239L16.2857 23.9763L11.7619 19.4525" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

CheckIcon.defaultProps = {
  fill: '#6C33B5',
  width: '24px',
  height: '15px',
  mr: '0',
  va: 'sub'
};

CheckIcon.ArrowWithRound = {
  fill: PropTypes.string,
  mr: PropTypes.string,
  va: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default CheckIcon;
