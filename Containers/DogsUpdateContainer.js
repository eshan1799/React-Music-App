import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFavouriteDog } from '../actions/dogActions'

class DogsWriteContainer extends Component {
    render() {
        return (
            <ul>
                <li onClick={() => this.props.selectAsFave(3)}>Samoyed</li>
                <li onClick={() => this.props.selectAsFave(2)}>Samoyed</li>
            </ul>
        )
    }
}

const mDTP = dispatch => ({
    selectAsFave: id => dispatch(changeFavouriteDog(id)),
    doARandomThing: () => dispatch({ type: 'RANDOM_EVENT' })
})

export default connect(null, mDTP)(DogsWriteContainer)