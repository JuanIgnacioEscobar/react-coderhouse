import React from "react";
import "./style.css";

export default function App() {
    const task = new Promise((resolve, reject ) => {
        //...codigo asincronico. PJ: fetch()
        resolve(true)
    })

task.then((res) => {
    // codigo necesario con "res"
    console.log("resuelta ->", res);
    throw new Error('status 500')
}, (rej) => {
    console.log("rechazada ->",rej);
})
.then(() => {
    console.log("segundo then");
})
.catch((err) => {
    console.log('hubo un error', err);
})
.finally(() => {
    console.log("AL FIN TERMINE");
})

return(
    <div>
        <h1>PROMISES</h1>
    </div>
)
}