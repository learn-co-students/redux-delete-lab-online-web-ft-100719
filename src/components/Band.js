import React from 'react';

const Band = ({ band, deleteBand }) => {
    return(
      <div>
        <li>{band.name}</li><button onClick={() => deleteBand(band.id)} >DELETE</button>
      </div>
    );
};

export default Band;
