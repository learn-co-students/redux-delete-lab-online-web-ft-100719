import React, { Component } from 'react'
import { render } from 'enzyme'
import Band from './Band'
import { connect } from 'react-redux'

class Bands extends Component {
    render() {
        let allBands = this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} name={band.name} id={band.id} />)
        return(
            <div>
                <h1>Bands:</h1>
                {allBands}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteBand: id => dispatch({ type: "DELETE_BAND", id})
  })

export default connect(null, mapDispatchToProps)(Bands)