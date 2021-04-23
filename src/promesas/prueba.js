import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {

    const [ items, setItems] = useState([])
    

    const task = new Promise((resolve, reject ) => {

        const objetos = [
            {
                id: 'asdasdasd',
                nombre: 'pelota',
                value: '$300'
            },
            {
                id: 'asdasdasd',
                nombre: 'Guantes',
                value: '$500'
            }
        ]
        //...codigo asincronico. PJ: fetch()
        setTimeout(()=>{
            resolve(objetos)
        },3000)
    })

task.then((res) => {
    setItems(res)
    // codigo necesario con "res"
    res.forEach((item) => {
        console.log('item', item);
        if (item.name === 'Arco') throw new Error()
    })}, (rej) => {
    console.log("rechazada ->",rej);
})
.then((newres) => {
    console.log("segundo then", newres);
})
.catch((err) => {
    console.log('hubo un error', err);
})
.finally(() => {
    console.log("AL FIN TERMINE");
})

useEffect(() => {
    items.length && console.log('items', items);
})

return(
    <div>
        <h1>Primisis y map</h1>
        <ul>
            {
                items.map((item) => <li>{item.name}</li>)
            }
        </ul>
    </div>
)
}