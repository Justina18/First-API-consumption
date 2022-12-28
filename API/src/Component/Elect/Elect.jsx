import React , {useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import './Elect.css'



const Elect = () => {

    const [elect, setElect] = useState([]);

    const receiveAPI = async () => {
      const res = await axios.get('https://fakestoreapi.com/products/category/electronics');
      setElect(res.data);
      console.log(res.data);
    };
  
    useEffect(() => {
      receiveAPI();
    }, []);
  

  return (
    <div>
         < div className="Elect">
        {elect.map((items) => (
          <Link className="App_Content" key={items.id} to={`/detail/${items.id}`}>
            <img src={items.image} alt="API-image" className="display" height="250" />
            <div className="feats">
              <p className="title">{items.title}</p>
              <p> Price: ${items.price}</p>
              <p>Category: {items.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
  

export default Elect