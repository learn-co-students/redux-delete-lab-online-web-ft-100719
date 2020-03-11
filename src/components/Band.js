import React, { Component } from 'react';

class Band extends Component {

  render() {
    return (
      <li key={this.props.band.id}>
        <div>
          {this.props.band.name}
          <button onClick={() => this.props.delete(this.props.band.id)}>X</button>
        </div>
      </li>
    );
  }
};

export default Band;
