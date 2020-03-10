import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
    render() {
        return(
            <ul>
                {this.props.bands.map((band, i) => {
                    return <Band deleteBand={this.props.deleteBand} key={i} id={band.id} name={band.name} />
                })}
            </ul>
        )
    }
}

export default Bands