import React, { Component } from 'react'

export default class Props extends Component {
    render() {
        return (
            <div>
                <h1>my car brand is {this.props.brand}</h1>
            </div>
        )
    }
}
