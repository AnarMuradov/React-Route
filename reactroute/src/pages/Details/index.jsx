import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const [api, setApi] = useState([]);
    function getApi() {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setApi(data);
            console.log(data.title)
          });
      }
      useEffect(() => {
        getApi();
      }, []);
  return (
  <div>
    <li>id: {api.id} </li>
    <li>name: {api.title} </li>
    <li>price: {api.price} </li>
      
  </div>

  )
}

export default Details