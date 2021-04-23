import React, { useState } from 'react';
import Name2 from './name2'

export default function Hok() {

    const [nombre, setNombre] = useState(0)

    const handleName = () => {
        setNombre(nombre + 1)
    }

    return(
    <React.Fragment>
        <Name2 nombre={'CODERHOUSE'}/>
        <button onClick={handleName}>CHANGE NAME2</button>
    </React.Fragment>
    );
}