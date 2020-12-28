import React, { Component } from "react";
import Coin from './Coin.js'

class Flipper extends Component {
    static defaultProps = {
        title: 'The Flippety Dippety',
        sides: ['heads', 'tails']
    }
    constructor(props) {
        super(props);
        this.state = { side: 'heads' }
    }

    generate() {
        this.setState(curState => ({
            side: this.props.sides[Math.floor(Math.random() * 2) + 1]
        }))
    }

    handleClick() {
        this.generate()
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Coin side={this.state.side} />
                <button onClick={this.handleClick}>FLIP MEH!</button>
            </div>

        )
    }
}

export default Flipper