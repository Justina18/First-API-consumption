import React, {useState, createContext} from 'react'
import './Header.css'
import Nav from './Nav'
import { FaTimes, } from 'react-icons/fa'
import { FiAlignJustify} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import  {MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'



function Header({NavTab}) {

    const [toggle, settoggle] = useState(true)
    const [taggle, setTaggle] = useState(false);

    const themes = {
      dark: "",
      light: "white-content",
    };
    
   const ThemeContext = createContext({
        theme: themes.dark,
      changeTheme: () => {},
    });

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
              
           </Link>
            </div>
            <Nav />
            <div>
            {taggle ? <MdOutlineNightlight onClick={() => { setTaggle(!taggle) }}fontSize= '25px' color='white'/>
         : <MdOutlineLightMode onClick={ () => { setTaggle(!taggle) } } fontSize= '25px' color='white' />  }
            </div>
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