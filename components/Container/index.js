import styled from 'styled-components';
import {
  GetMarginPadding } from '../CommonProps';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  padding: ${props => props.p};
  text-align: ${props => props.textAlign};
  margin-top: ${props => props.mt};
  overflow: hidden;
  ${props => props.display && { display: props.display }}
  ${props => props.height && { height: props.height }}
  ${props => props.overflow && { overflow: props.overflow }}
  ${props => props.minHeight && { minHeight: props.minHeight }}
  ${props => props.borderBottom && { borderBottom: props.borderBottom }}
  ${props=>props.p && { padding: props.p }}
  ${props => GetMarginPadding(props)}
  @media (min-width: ${props => props.theme.breakpoints('xs')}) {
    max-width: ${props => (props.type === 'cf' ? '100%' : '300px')};
  }
  @media (min-width: ${props => props.theme.breakpoints('sm')}) {
    max-width: ${props => (props.type === 'cf' ? '100%' : '720px')};
  }
  @media (min-width: ${props => props.theme.breakpoints('md')}) {
    max-width: ${props => (props.type === 'cf' ? '100%' : '1370px')};
  }
  @media (min-width: ${props => props.theme.breakpoints('lg')}) {
    max-width: ${props => (props.type === 'cf' ? '100%' : '1100px')};
  }
  
`;

Container.defaultProps = {
  type: 'container',
  pr: '1rem',
  pl: '1rem'
};

export default Container;
