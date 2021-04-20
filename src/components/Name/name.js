import React, { Component } from 'react';

export default class Name extends Component{

    constructor(props) { //esto es un estado
        super(props) //super recibe lo que traen las props de otro lugar 
        this.state = {  
            name: this.props.nombre
        }
    }

    handleName = () => { // esto es un metodo, puedo utilizar todos los que sean convenientes
        this.setState({
            name: 'Sebastian Dominguez'
        })
    }

    render() {
        return(
            <React.Fragment>
            <button onClick={this.handleName}>CHANGE NAME</button>
            <h2>{this.state.name}</h2>
            </React.Fragment>
        )
    }
}