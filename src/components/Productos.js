import React, { Component } from 'react';
import Producto from './Producto';

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div>
        {productos.map((producto, idx) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={idx}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}
