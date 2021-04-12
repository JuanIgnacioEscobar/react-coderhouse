import React, { Fragment } from 'react'
import './button.css'

const ButtonFc = ({text, color,padding,suma,children}) => {

    return(
        // suma ?
        <Fragment>
            <button className='radius' /* onClick={()=>suma(4)} */ style={{backgroundColor: color, color:'white', padding: padding}}>
                {text}
            </button>
            {children}
        </Fragment>
        /*:
        <Fragment>
            <button onClick={()=>suma(4)} style={{backgroundColor: color, color:'white', padding: padding}}>
                {text}
            </button>
        {children}
        </Fragment> */
    );
}

export default ButtonFc