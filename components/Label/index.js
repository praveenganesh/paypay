import styled from 'styled-components';
import { GetMarginPadding, GetFontProps, GetPositions } from '../CommonProps';

const Label = styled.label`
${props => props.visibility && { visibility: props.visibility }}
  display: ${props => props.display};
  ${props => props.position && { position: props.position }}
  ${props => props.float && { float: props.float }}
  ${props => props.bg && { background: props.bg }}
  ${props => props.opacity && { opacity: props.opacity }}
  ${props => props.width && { width: props.width }}
  ${props => props.cursor && { cursor: props.cursor }}
  ${props => props.color && { color: props.color }}
  ${props => props.ta && { textAlign: props.ta }}
  ${props => props.height && { height: props.height }}
  &:before{
    ${props => props.important && { content: '"* "' }};
    color:red;
  }
  &:after{
    ${props => props.optional && { content: '" (Optional)"' }};
    color: #c1c1c1;
    
  }
  ${props => GetPositions(props)}
  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
`;

Label.defaultProps = {
  fontSize: '0.875rem',
  fontWeight: 'bold',
  height: '20px',
  fontFamily: 'inter',
  mb: '5px',
  mt: '5px',
  type: 'note',
  color: 'textDark',
  ta: 'left',
  lineHeight: 'normal',
  display: 'inline-block',
  va: 'inherit',
  letterSpacing: '0.8px'
};

export default Label;
