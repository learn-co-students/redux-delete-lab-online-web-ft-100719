import React from 'react';

const Band = ({ band, deleteBand }) => {
  return (
    <div>
      <ul>
        <li>{band.name} </li><button onClick={() => deleteBand(band.id)}>DELETE</button>
      </ul>
    </div>
  )
}

export default Band;
