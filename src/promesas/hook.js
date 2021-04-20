import React, { useState } from 'react';

export default function Hok() {
    
    const [numero, setNumero] = useState(3)

    const handleNumero = () => { //se considera buena practica crear un handle para no hacer todo en una misma linea, siempre se hace con arrow
        setNumero(numero+1)
    }

    return(
        <div>
            <h1>Encuentro {numero}</h1>
            <button onClick={handleNumero}>CHANGE NUM</button>
        </div>
    )
}