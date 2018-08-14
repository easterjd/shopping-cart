import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItemComp = ({prodId, name, priceInCents, quant}, index) => {
  return (<div key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-8">{name}</div>
              <div className="col-md-2">${priceInCents / 100}</div>
              <div className="col-md-2">{quant}</div>
            </div>
          </div>)
}

export default CartItemComp
