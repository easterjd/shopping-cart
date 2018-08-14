import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: '',
      product: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
     });
    console.log(e.target)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const prodToAdd = this.props.products.find(prod => prod.name === this.state.product)
    this.props.addProduct({product: prodToAdd, quantity: parseInt(this.state.quantity)})
    this.setState({
      quantity: '',
      product: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <QuantControl
          name="quantity"
          type="text"
          placeholder="Enter Quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <ProdDrop
          name="product"
          products={this.props.products}
          placeholder="Select A Product"
          value={this.state.product}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const QuantControl = (props) => {
  return (
    <div className="form-group text-center">
      Quantity: <input value={props.value} className="form-text form-control" type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

const ProdDrop = (props) => {
  const products = props.products
  const options = products.map((prod, index) => (<option key={index} value={prod.name}>{prod.name}</option>))
  return (
    <div className="form-group text-center">
      <select className="form-control" onChange={props.onChange} name={props.name} placeholder={props.placeholder}>
        <option value="">Select A Product</option>
        {options}
      </select>
    </div>
  )
}

export default AddItem
