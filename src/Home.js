import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
            className='home__image'
            src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=1380&t=st=1680149160~exp=1680149760~hmac=fd2fd2400b6523fc6bd8fcee3b9e817bdf34ed2699ebac75fdc0e990300e3ae7"
            alt=""
            />
            <div className='home__row'>
                <Product />
                {/* Product */}
            </div>

            <div className='home__row'>
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>

            <div className='home__row'>
                {/* Product */}
            </div>
        </div>
    </div>
  )
}

export default Home