import React, { useState, useEffect } from "react";

const Name2 = ({nombre}) => {

    const [numero, setNumero] = useState(3)

    useEffect(() => { //con [] es solo la primera vez 
        console.log('solo 1 vez');
        //POR EJEMPLO ALGO ASINCRONICO
        return () => { //esta es la forma de limpiar
            console.log('CUANDO ME DESMONTE');
        }
    },[])

    useEffect(() => {
        console.log('En cada renderizado');
    })

    useEffect(() => {
        console.log('SOLO CUANDO NUMERO CAMBIE (prop nombre)');
    },[nombre])

    const handleNumero = () => { //se considera buena practica crear un handle para no hacer todo en una misma linea, siempre se hace con arrow
        setNumero(numero+1)
    }

    return (
        <React.Fragment>
            <h1>Encuentro {numero}</h1>
            <button onClick={handleNumero}>CHANGE NUM</button>
            <h2>{nombre}</h2>
        </React.Fragment>
    )
}

export default Name2