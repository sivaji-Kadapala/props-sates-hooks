import React, { Component } from 'react'

 class Props extends Component {
    render() {
        return (
            <div>
                my car model is {this.props.brand.model}
            </div>
        )
    }
}


export default class Props3 extends Component {
    render() {
        const car={name:"ford",model:123}
        return (
            <div>
                <Props brand={car}/>
            </div>
        )
    }
}
