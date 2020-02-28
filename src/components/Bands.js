import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    return(
      <div>
        {this.props.bands.map(band => <Band key={band.id} deleteBand={this.props.deleteBand} band={band}></Band>)}
      </div>
    )
  }
}

export default Bands;