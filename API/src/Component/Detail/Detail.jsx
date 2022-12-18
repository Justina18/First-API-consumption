import React from 'react'
import "./Detail.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Detail() {
  const {id} = useParams()
  const [item, setItem] = useState([]);

  const getItem= async()=>{
      try{
          const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          console.log(res.data)
          setItem(res.data)
      }catch(err){
          console.log(err)
      }
  }

  useEffect(()=>{
      getItem()
  }, [])

  return (
    <div className="Detail_Main">
        <div className="Detail_Wrap">
            <div className='Image'>
                <div className='pic'>
                    <img className="detail-img" src={item.image} alt="detail-image"/>
                </div>
                <div className='image-text'>
                    <h4>{item.title}</h4>
                </div>
            </div>
              <div className='Text'>
              <p className="detail-desc"><span>Description:</span> {item.description}</p>
                <p className="detail-cat">Category: {item.category}</p> 
               
              <button>ADD TO CART</button>
              </div>
            </div>
    </div>
  )
}

export default Detail