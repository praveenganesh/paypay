import styled from 'styled-components';
import Link from 'next/link';

const LinkCustom = styled(Link)`
  color: ${props => props.theme.colors[props.color]};
  background: ${props => props.theme.colors[props.bg]};
  font-size: ${props => props.theme.fontSizes[props.fontSize]};
  border: 1px solid ${props => props.theme.colors[props.bc]};
  text-decoration: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,
  border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  ${props => props.tt && { textTransform: props.tt }}

  &:hover {
    color: ${props => (props.color ? props.hoverColor : props.theme.colors.textDark)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

LinkCustom.defaultProps = {
  fontSize: '1rem',
  border: 'none',
  bg: 'transparent',
  color: '#333333',
  bc: 'transparent'
};

export default LinkCustom;
