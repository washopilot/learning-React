import React, { Component } from 'react';

export default class Producto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <div>
        <img alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
      </div>
    );
  }
}
