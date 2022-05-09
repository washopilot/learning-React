import React, { Component } from 'react';

const styles = {
  button: {
    background: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}
