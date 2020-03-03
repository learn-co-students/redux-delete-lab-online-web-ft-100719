import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li key={this.props.id} >
        {this.props.name} | <button onClick={() => this.props.deleteBand(this.props.id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
