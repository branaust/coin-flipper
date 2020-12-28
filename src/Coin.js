import React, { Component } from "react";

class Coin extends Component {
    render() {
        return (
            <div>{this.props.side}</div>
        )
    }
}

export default Coin