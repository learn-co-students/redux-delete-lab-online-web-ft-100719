import React, { Component } from 'react';

class Band extends Component {
  
  handleclick = () => { 
    this.props.deleteBand(this.props.id)
  } 
  render() {
    return (
      <div>
        <li key={this.props.band.id}> {this.props.band.name} 
        <button onClick={this.handleOnClick}>DELETE</button>
        </li>    
      </div>
    );
  }
};

export default Band;
