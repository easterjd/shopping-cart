import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItems: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  addProd = (product) => {
    this.setState(prevState => {
      return {
        cartItems: this.state.cartItems.concat(product),
        products: this.state.products
      }
    })
  }

  totalPrice = () => {
    const result = this.state.cartItems.reduce((acc, item) => {
      return acc += item.product.priceInCents * item.quantity
    }, 0)
    return result / 100
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <div className="row">
          <div className="col">
            <CartItems cartItemsList={this.state.cartItems} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            Total Price: ${this.totalPrice()}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            <AddItem addProduct={this.addProd} products={this.state.products}/>
          </div>
        </div>
        <CartFooter copyright="2018"/>
      </div>
    );
  }
}

export default App;
