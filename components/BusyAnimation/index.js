import React from 'react';
import styled from 'styled-components';
import Div from '../Div';
import Img from '../Img';
import Row from '../Row';

const P = styled.p`
font-size : ${props => props.fS};
color:#000;
color:${props => props.color};
font-weight:${props => props.fW};
letter-spacing:${props => props.lS};
display:${props => props.display};
margin:${props => props.margin};
margin-top:${props => props.mt};
margin-bottom:${props => props.mb};
margin-left:${props => props.ml};
margin-right:${props => props.mr};
padding-top:${props => props.pt};
padding-bottom:${props => props.pb};
padding-left:${props => props.pl};
padding-right:${props => props.pr};
width: 100%;
&:hover{
  'overflow':'visible',
}
`;

const BusyAnimation = (props) => (
  <Row ml={props.ml} display="flex" jc={props.jc} width={props.width || "100%"}>
    <Div m={props.m} mt={props.mt || "18px"}>
      <Img width={props.size} src="/static/loading.svg" />
    </Div>
    <Div ml="10px">
      <P fW="400" fS={props.fS}>{props.displayText}</P>
    </Div>
  </Row>
);

export default BusyAnimation;
