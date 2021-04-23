import React, { Fragment } from 'react';
import './item.css'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos);

    return (
        <Fragment>
            <div className="estilo-card">
                {
                    productos.map((dato) =>
                    <div key={dato.id}>
                        <Item img={dato.img} title={dato.title} precio={dato.precio} />
                    </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default ItemList