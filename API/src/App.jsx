import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import {AiFillHome, AiFillPhone} from 'react-icons/ai'
import {FaQuestionCircle,FaRegWindowClose} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'


function App() {
  const [count, setCount] = useState([])
  const [state, setState] = useState(false)

  const style = { color: "white", fontSize: "1.2em" }

  const receiveAPI = async() =>{
    const res =  await axios.get('https://fakestoreapi.com/products');
    setCount(res.data)

  }

  useEffect(()=>{
    receiveAPI()
  },[])

  const Menu = (
    <nav className='navigation'>
      <div className='menu' onClick={() => {setState(!state)}}></div>
      <div>
      <AiFillHome style={style}  className='icon1'/>
        <FaQuestionCircle style={style}  className='icon1'/>
        <AiFillPhone style={style}  className='icon1'/>
      </div>
    </nav>
  )

  
  return (
    <div className="App">
      <div className='header'>
        <h1>Alaña</h1>
        <div className='icons'>
        <AiFillHome style={style} className='icon1'/>
        <FaQuestionCircle style={style}  className='icon1'/>
        <AiFillPhone style={style}  className='icon1'/>
        </div>
        {state ? <FaRegWindowClose style={style} onClick={() => {setState(!state)}}/> : <BiMenu style={style} className='pain' onClick={() => {setState(!state)}}/> }{state? Menu: ''}
       
      </div>


      <div className='App-wrap'>
      {
         count.map((items)=>(
          <div className='items' key={items.id}>
              <img src={items.image} alt="API-Image" className='display'/>
              <p>{items.title}</p>
              <p>Price:${items.price}</p>
              <p>Ratings:{items.rating.rate}%</p>
          </div>
        ))
      }    
    </div>
    </div>
  )
}

export default App;
