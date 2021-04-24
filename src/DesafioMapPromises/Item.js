import React from 'react';
import './item.css'
import ItemCount from './ItemCount';

const Item = ({img, title, precio, id, stock}) => {
    console.log(img,title,precio,id, stock);
    return(
        <React.Fragment>
            <div className='cardProd'>
                <div>
                    <div>
                        <img src={img} alt="" className='card-img'/>
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>{precio}</p>
                    </div>
                </div>
                <div>
                    <ItemCount stock={stock} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item