import React, { Component } from 'react'

 class Props extends Component {
    render() {
        return (
            <div>
                my car brand is {this.props.brand}
            </div>
        )
    }
}


export default class Props2 extends Component {
    render() {
        const car="ford";
        return (
            <div>
                <Props brand={car}/>
            </div>
        )
    }
}
