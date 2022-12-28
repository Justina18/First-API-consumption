import React, {useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import './Women.css'

const Women = () => {

    const [women, setWomen] = useState([]);

  const receiveAPI = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
    setWomen(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    receiveAPI();
  }, []);


  return (
    <div>
         < div className="Women">
        {women.map((items) => (
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

export default Women