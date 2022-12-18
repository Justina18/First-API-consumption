import React, {useState} from 'react'
import './Header.css'
import Nav from './Nav'
import { FaTimes, } from 'react-icons/fa'
import { FiAlignJustify, FiSun } from 'react-icons/fi'
import {Link} from 'react-router-dom'


function Header({NavTab}) {

    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }

    const FiAlignJustif = (<FiAlignJustify onClick={handletoggle} />)
    const FaTime = (<div>
        <FaTimes  onClick={handletoggle} />
                  </div>)
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
            <Link to="/" className='links'>
             <img src='/Logo.png' className='Logo'  />
           </Link>

            <Nav />
            <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>
          </div>
          <div>
               {!toggle? NavTab:''}
            </div>
        </div>
    </div>
  )
}

export default Header