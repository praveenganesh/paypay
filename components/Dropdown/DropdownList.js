import styled from 'styled-components';
import { GetMarginPadding, GetFontProps } from '../CommonProps';
import React from 'react';

const StyledDropdownList = styled.ul`
  border-radius: 5px;
  background-color: #ffffff;
  display : none;
  margin-top: 0;
  padding: 0;
  width: 95%;
  position: absolute;
  top: 95%;
  left: -5px;
  z-index: 3;
  overflow:auto;
  height: 100px;
  ${props => props.left && { left: props.left }}
  ${props => props.width && { width: props.width }}
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  ${props => props.width && { width: props.width }}
  &:hover, &:focus {
    display: ${props => (props.display)};
  }
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
      cursor: pointer;
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

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'block !important',
    }
  }
  render() {
    return (
      <StyledDropdownList
        width={this.props.width}
       display={this.state.display}
       left={this.props.left}
       width={this.props.width}
        onTouchMove={(e) =>{e.stopPropagation()}}
        className={this.props.class ? this.props.class : '' }
        onClick={()=>this.setState({display:'none !important'})}
        onMouseEnter={()=>this.setState({display:'block !important'})}
      >
       {this.props.children}
      </StyledDropdownList>
    );
  }
}

DropdownList.defaultProps = {
};

export default DropdownList;
