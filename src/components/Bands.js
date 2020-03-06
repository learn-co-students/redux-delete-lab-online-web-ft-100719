import React, { Component } from 'react';
import Band from './Band'

const Bands = (props) => {

  const bandList =  props.bands.map(band => <Band key={band.id} band={band} deleteBand= {props.deleteBand}/>)
    return (
      <div>
        {bandList}
      </div>
    );
}

export default Bands;
