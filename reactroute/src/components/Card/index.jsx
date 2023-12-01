import React, { useEffect, useState } from 'react'
import "./style.css"
import { Link, useParams } from 'react-router-dom';
const Card = () => {

    let  {id}  = useParams();
    const [api, setApi] = useState([]);
    function getApi() {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            setApi(data);
          });
      }
      useEffect(() => {
        getApi();
      }, []);
  return (
    <div className="products">
          { api.map((x) => {
              return (
                <ul  key={x.id} className="card">
                  <li>{x.title}</li>
                  <li>{x.price}$</li>
                  <li>{x.description.slice(1, 50)}...</li>
                  <li className="categ">{x.category}</li>
                  <button><Link to={`/Details/${x.id}`}>Details</Link></button>
                </ul>
              );
            })
          }
        </div>
  )
}

export default Card