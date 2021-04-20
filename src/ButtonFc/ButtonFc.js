import React, { Fragment } from 'react'
import './button.css'

const ButtonFc = ({text, color,padding,children}) => {

    console.log("children en ButtonFc", children);

    return(
        <Fragment>
            <button className='radius' style={{backgroundColor: color, color:'white', padding: padding}}>
                {text}
            </button>
            {children}
        </Fragment>
    );
}
// Ciclo de vida en componentes (pregunta de trabajo)

export default ButtonFc