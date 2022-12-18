import React, {useState, useEffect} from 'react'
import './Header.css'
import Nav from './Nav'
import { FaTimes, } from 'react-icons/fa'
import { FiAlignJustify, FiSun } from 'react-icons/fi'
import {Link} from 'react-router-dom'


function Header({NavTab}) {

    const [toggle, settoggle] = useState(true)
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
      if (theme === 'light'){
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    useEffect(() => {
      document.body.className = theme;},
      [theme]);

    const handletoggle = () => { settoggle(!toggle) }
    const FiAlignJustif = (<FiAlignJustify fontSize={25} color="white" onClick={handletoggle} />)
    const FaTime = (<div>
        <FaTimes fontSize={25} color="white" onClick={handletoggle} />
                  </div>)
  return (
    <div className="Header_Container">
       <div className="Main">
          < div className="Head_Content">
            <div>
            <Link to="/" className='links'>
             <img src='/Logo.png' className='Logo'  />
             <h1  className='shopping'>Alaña</h1>
             <FiSun fontSize={25} color="white" onClick={toggleTheme}/> 
           </Link>
            </div>
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