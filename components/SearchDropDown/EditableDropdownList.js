import styled from 'styled-components';
import { GetMarginPadding, GetFontProps } from '../CommonProps';
import React from 'react';

const StyledDropdownList = styled.ul`
  border-radius: 2px;
  border: solid 1px #bebec0;
  background-color: #ffffff;
  display: inline-block;
  margin-top: 0;
  margin-left: 0px;
  padding: 0;
  position: absolute;
  left: 0;
  z-index: 1;
  display: none;
  overflow: auto;
  width : ${props => (props.width)};
  height: 100px;
  display : ${props => (props.display)};  
  ${props => props.width && { width: props.width }}
  ${props => props.position && { position: props.position }}
  ${props => props.display && { display: props.display }}
  ${props => GetFontProps(props)}
  ${props => GetMarginPadding(props)}
  li {
    list-style: none;
    button {
      padding: 7px 10px;
      text-align: left;
      background: transparent;
      border: none;
      width: 100%;
      font-size: 13px;
      color: #445870;
    }
    &:first-child {
      border-radius: 5px 5px 0 0;
      button {
        border-radius: 5px 5px 0 0;
      }
    }
    &:last-child {
      border-radius: 0 0 5px 5px;
      button {
        border-radius: 5px 5px 0 0;
      }
    }
    &:hover {
      background-color: #f6f7f9;
    }
  }
`;

class EditableDropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none !important',
    }
  }
  render() {
    return (
      <StyledDropdownList
        className={this.props.className} 
        onTouchMove ={(e)=>{e.stopPropagation()}}
        onMouseOver={()=>{this.setState({display: "block !important"})}}
        onClick={() => { this.setState({display: "none !important"}) }}
        onMouseLeave={()=>{this.setState({display: "none !important"})}}
        display={this.props.display}
        width={this.props.width}
        ml={this.props.ml}

      >
       {this.props.children}
      </StyledDropdownList>
    );
  }
}


EditableDropdownList.defaultProps = {
  width:'100%',
};

export default EditableDropdownList;
