import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className='product'> 
        <div className='product__info'>
            <p>The Startup</p>
            <p className= 'product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className='product__rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
            </div>
        </div>
        <img src={image} alt="" />

        <button>Add to Basket</button>
    </div>
  )
}
 
export default Product