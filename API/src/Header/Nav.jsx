import React from 'react'
import {AiOutlineShoppingCart, AiFillQuestionCircle} from 'react-icons/ai'
import {BiHome} from 'react-icons/bi'

import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className="NavTab">
       <BiHome fontSize={25}/>
       <AiFillQuestionCircle fontSize={25}/> 
       <Link to="/Cart"  className='links'>
       <AiOutlineShoppingCart fontSize={25} color="black"/>
      </Link>
    </div>
    
  )
}

export default Nav