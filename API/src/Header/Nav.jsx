import React, {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Nav.css'


function Nav() {

  const [state, setState] = useState(false)

  const dropDisplay = () => {
    setState(true)
  };

  const listDisplay = () => {
    setState(true)
  };

  const hideList = () =>{
    setState(false)
  }

  return (
    <div className="NavTab">
       <Link to="/" className='links'>
       <h4>Home</h4>
       </Link>

        
        <div className='cat' onMouseEnter={dropDisplay} >
       <h4>Category</h4>
       </div>
       

      <div className='down'>
          {state ? ( 
            <div className='Drop' onMouseEnter={listDisplay} onMouseLeave={hideList} >
              <Link className='drop-elec' to="/Electronics">
            <p>Electronics</p>
              </Link>
            <Link  className='drop' to="/Clothes" >
            <p>Men's Clothing</p>
            </Link>
            <Link  className='drop' to='/Women Clothes' >
            <p>Women's Clothing</p>
            </Link>
          <Link className='drop' to="/Jew">
            <p>Jewelry</p>
          </Link>


            </div>) : null }
      </div>

       <Link to="/Cart"  className='links'>
       <AiOutlineShoppingCart fontSize={25} color="white"/>
       <h4>Cart</h4>
      </Link>
    </div>
    
  )
}

export default Nav