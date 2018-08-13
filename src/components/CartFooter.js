import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartFooter = ({copyright}) => {
  return (<nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {copyright}</a>
          </nav>)
}

export default CartFooter
