import React, { useState } from 'react';
import './item.css'

const ItemCount = ({stock}) => {
    
    const [stockTotal, setStockLocal] = useState (stock);
    const [stockUser, setStockUser] = useState (0);

    const suma = () => {
        if (stockTotal === 0) {

        }else{
            setStockUser(stockUser + 1);
            setStockLocal(stockTotal - 1);
        }
    }

    const resta = () => {
        if (stockTotal === 0 | stockUser === 0) {
            
        }else{
            setStockUser(stockUser - 1);
            setStockLocal(stockTotal + 1);
        }
    }

    return (
        <React.Fragment>
            <p>Cantidad en stock: {stockTotal}</p>
            <div className='contador'>
                <button onClick={resta}>-</button>
                <p>{stockUser}</p>
                <button onClick={suma}>+</button>
            </div>
        </React.Fragment>
    )
}

export default ItemCount