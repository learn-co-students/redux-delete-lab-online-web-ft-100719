import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <band key={band.id} {...band} deleteBand={props.deleteBand} />)

  return (
    <div>
      {bands}
    </div>
  );
};

export default Bands;