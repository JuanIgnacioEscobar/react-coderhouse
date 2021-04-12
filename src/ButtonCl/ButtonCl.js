import React from 'react'
import ButtonFc from '../ButtonFc/ButtonFc'

export default class ButtonCl extends React.Component { //se puede usar un solo export default, los demas se llaman solo con export y llamandolos {} con el nombre exacto
    
    render() {
        
        return(
            <ButtonFc suma2={this.props.suma2} text={this.props.text} color={this.props.color} padding={this.props.padding}/>
        )
    }
}
