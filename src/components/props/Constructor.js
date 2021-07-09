import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    render() {
        return (
            <div>
                my car brand is {this.props.brand}
            </div>
        )
    }
}
