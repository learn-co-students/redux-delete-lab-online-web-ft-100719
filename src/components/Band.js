import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
  }
  
  render() {
    return(
      <li id={this.props.id}>
        <span>{this.props.name}</span><button onClick={this.handleClick}>DELETE</button>
      </li>
    );
  }
};

export default Band;
