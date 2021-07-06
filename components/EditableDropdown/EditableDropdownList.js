import styled from 'styled-components';
import { GetMarginPadding, GetFontProps } from '../CommonProps';
import React from 'react';

const StyledDropdownList = styled.ul`
  border-radius: 2px;
  background-color: #ffffff;
  display: inline-block;
  margin-top: 0;
  margin-left: 0px;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: none;
  top: 96%;
  overflow: auto;
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  width : ${props => (props.width)};
  left: ${props => (props.left)};
  height: 100px;
  display : ${props => (props.display)};  
  ${props => props.width && { width: props.width }}
  ${props => props.position && { position: props.position }}
  ${props => props.display && { display: props.display }}
  ${props => props.right && { right: props.right }}
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
      color: black;
      font-weight: 600;
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
        right={this.props.right}
        left={this.props.left}

      >
       {this.props.children}
      </StyledDropdownList>
    );
  }
}


EditableDropdownList.defaultProps = {
  width:'100%',
  left:0,
};

export default EditableDropdownList;
