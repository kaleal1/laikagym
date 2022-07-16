   
import React from 'react';
import pgimg from "../../images/logo.png";


export default function Product(props) {
  const { product, onAdd } = props;
  return (

      <div className="all-cards">
          <div className="card-container-custom">
              <div className="card" >
                  <img src={pgimg} className="img-fluid" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">{product.name} </h5>
                      <h6 className="card-title">${product.price} </h6>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary" onClick={() => onAdd(product)}>Agregar al carrito</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

