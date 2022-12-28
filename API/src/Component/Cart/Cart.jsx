import React from 'react'
import './Cart.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'


function Cart () {
  return (
    <div className='Cart'>
      <div className='Cart-wrap'>
        
      <AiOutlineShoppingCart fontSize={180} color="orange" className='cart-icon'/>
      <h5>Your cart is empty!</h5>
      <p>Browse our categories and discover our best deals!</p>
      <button className='cart-butt'>START SHOPPING</button>
      </div>
    </div>
  )
}

export default Cart