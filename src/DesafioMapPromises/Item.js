import React from 'react';
import './item.css'

const Item = ({img, title, precio, id}) => {
    console.log(img,title,precio,id);
    return(
        <React.Fragment>
            <div className='cardProd'>
                <div>
                    <img src={img} alt="" className='card-img'/>
                    <p>{title}</p>
                    <p>{precio}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item