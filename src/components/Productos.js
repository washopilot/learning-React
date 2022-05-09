import React, { Component } from 'react';
import Producto from './Producto';

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
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
