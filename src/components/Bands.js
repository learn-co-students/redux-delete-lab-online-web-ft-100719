import React from 'react'
import Band from './Band'

class Bands extends React.Component {

    render () {
        return (
            <div>
                {this.props.bands.map(band => <Band key={band.id} deleteBand={this.props.deleteBand} band={band}/>)}
            </div>
        )
    }
}

export default Bands;