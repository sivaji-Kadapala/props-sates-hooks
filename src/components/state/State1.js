import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             brand:"ford ",
            //  isLoggedIn:true
        }
    }
    changeBrand=() => {
        this.setState({brand:"Sumo"})
    }
   shoot =(a,b) => {
        alert(b.type);
    }
    
    render() {
        // if(this.isLoggedIn)
        //         {
        //             return <div>Siva</div>
        //         }else{
        //             return <div>Sivaji</div>
        //         }
        return (
            <div>
               <h1>my brand name is {this.state.brand}</h1> 

                <button onClick={this.changeBrand}>Click</button>
                <button onClick={this.shoot.bind(this,"I Shoot You")}>Click me</button>
                
            </div>
            
        )
    }
}
