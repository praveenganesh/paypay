import styled from 'styled-components';
import { GetMarginPadding, GetBoxsizing, GetHiddenProps } from '../CommonProps';

const Section = styled.section`
  box-sizing: border-box;
  clear: both;

  display: ${props => props.display};
  background: ${props => props.theme.colors[props.bg]};
  box-shadow: ${props => props.boxShadow};
  height: ${props => props.height};
  position: relative;

 
  ${props => props.float && { float: props.float }} 
  ${props => props.minHeight && { minHeight: props.minHeight }}
  ${props => props.border && { border: props.border }}
  ${props => props.maxHeight && { maxHeight: props.maxHeight }}
  ${props => props.of && { overflow: props.of }}
  ${props => props.ofY && { overflowY: props.ofY }}
  ${props => props.overflow && { overflow: props.overflow }}
  ${props => props.jc && { justifyContent: props.jc }}
  ${props => props.boxShadow && { boxShadow: props.boxShadow }}
  ${props => props.width && { width: props.width }}
  ${props => props.height && { height: props.height }}
  ${props => props.mb && { marginBottom: props.mb }}
  ${props => props.overflow && { overflow: props.overflow }}
  ${props => GetMarginPadding(props)}
  ${props => GetBoxsizing(props)}
  ${props => GetHiddenProps(props)}
`;

Section.defaultProps = {
  display: 'block',
  mb: '1.5rem',
  p: '0.9375rem 5rem',
  bg: 'transparent',
  boxShadow: 'none',
  height: 'auto'
};

export default Section;
