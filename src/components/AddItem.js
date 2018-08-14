import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: null,
      product: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     });
    console.log(this.state)
  }


  render() {
    return (
      <form onSubmit={this.props.addProduct}>
        <QuantControl
          name="Quantity"
          type="text"
          placeholder="Enter Quantity"
          onChange={this.handleChange}
        />
        <ProdDrop
          products={this.props.products}
          placeholder="Select A Product"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const QuantControl = (props) => {
  return (
    <div className="text-center">
      <label for={props.name}>{props.name}:</label><br/>
      <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
  )
}

const ProdDrop = (props) => {
  const products = props.products
  const options = products.map(prod => (<option value={prod.name}>{prod.name}</option>))
  return (
    <div className="text-center">
      <select name="{props.name}" placeholder={props.placeholder}>
        {options}
      </select>
    </div>
  )
}

export default AddItem
