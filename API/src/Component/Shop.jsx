import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function Shop() {
    const [count, setCount] = useState([]);

    const receiveAPI = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setCount(res.data);
      console.log(res.data);
    };
  
    useEffect(() => {
      receiveAPI();
    }, []);

  return (
   < div className="Shop">
        {count.map((items) => (
          <Link className="App_Content" key={items.id} to="/detail/${items.id}">
            <img src={items.image} alt="API-image" className="display" width="100%" height="250" />
            <div className="feats">
              <p className="title">{items.title}</p>
              <p> Price: ${items.price}</p>
              <p> Rate : {items.rating.rate}</p>
              <p>Category: {items.category}</p>
            </div>
          </Link>
        ))}
      </div>
    

    
  )
}

export default Shop