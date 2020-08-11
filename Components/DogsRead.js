import React, { Component } from 'react'
import { connect } from 'react-redux'

class DogsRead extends Component {
    render() {
        return (
            <ul>
                { this.props.allDogs.map(d => <li key={d.id}>{d.name}</li>) }
            </ul>
        )
    }
}

const mSTP = state => ({ allDogs: state.dogs })

export default connect(mSTP)(DogsRead)