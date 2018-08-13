import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItemComp = ({key, prodId, name, priceInCents, quant}) => {
  return (<div className="list-group-item">
            <div class="row">
              <div className="col-md-8">{name}</div>
              <div className="col-md-2">${priceInCents / 100}</div>
              <div className="col-md-2">{quant}</div>
            </div>
          </div>)
}

export default CartItemComp
