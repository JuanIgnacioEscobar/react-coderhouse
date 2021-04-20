import React, { useState } from 'react';

const Prueba = (props) => {

    const [cuenta, setCuenta] = useState(0);
    const [timeClick, setTimeClick] = useState("");

    const contar = () => {
        setCuenta(cuenta + 1);
        let time=Date()

        setTimeClick(time)
    }

    return(
        <div>
            <header className="app-header">
                <button onClick={contar}>Click Here</button>
                <p className="app-link">{props.greeting} la cuenta es: <br /> {cuenta}</p>
                <p>El ultimo click fue el: {timeClick}</p>
            </header>
        </div>
    )
}

export default Prueba;