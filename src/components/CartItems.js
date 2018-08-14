import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItemComp from './CartItemComp'

const CartItems = (props) => {

  const cartItemsList = props.cartItemsList
  const items = cartItemsList.map(item => <CartItemComp prodId={item.product.id} name={item.product.name} priceInCents={item.product.priceInCents} quant={item.quantity} />)
  return (<div className="container">
            <h1>Items</h1>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-md-8">Product</div>
                  <div className="col-md-2">Price</div>
                  <div className="col-md-2">Quantity</div>
                </div>
              </div>
              {items}
            </div>
          </div>)
}

export default CartItems
