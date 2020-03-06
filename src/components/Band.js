import React, { Component } from 'react';

class Band extends Component {
  
  handleOnClick = () => { 
    console.log("In deleteband")
    this.props.deleteBand(this.props.band.id)
  } 
  render() {
    return (
      <div>
        <li key={this.props.band.id}> {this.props.band.name} </li> 
        <button onClick={this.handleOnClick}>DELETE</button>      
      </div>
    );
  }
};

export default Band;
