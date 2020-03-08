import React from 'react'
import Band from './Band'

const Bands = (props) => {
  return (
    <div>
      {props.bands.map((band, i) => <Band key={band.id} band={band} delete={props.delete} />)}
    </div>
  )
}

export default Bands