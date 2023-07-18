import React from 'react'
import './Products.css'

function Products({image,price,year,km,descrip,rating}) {
  return (
    <div className='product-container'>
        <div className='Products-main-div'>
          
        <div className='product-rating'>
              {
                Array(rating)
                .fill()
                .map((_,i)=>(
                  <p>🤍</p>
                ))
              }
            </div>
            <button className='featured-btn'>featured</button>
            
            <div>
            <img className='product-image' src={image} alt="" />
            </div>
            
            <div className='product-details'>
            <p className='product-price'>
              <small>$</small>
              <small>{price}</small>

            </p>
              <p>{year} : {km}</p>
              <p>{descrip}</p>
            </div>
            
            
        
       

        </div>
       
      
    </div>
  )
}

export default Products
