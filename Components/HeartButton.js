import React, { Component } from 'react'

class HeartButton extends Component {

    state = { heartIsBlack: true }

    isBlackTrue = () => {
        this.setState(prevState => ({ heartIsBlack: !prevState.heartIsBlack }))
    }

    render() {
        return (
            <p onClick={this.isBlackTrue} style={{color: `${this.state.heartIsBlack ? 'black': 'red'}`}}>&hearts;</p>
        )
    }
}

export default HeartButton