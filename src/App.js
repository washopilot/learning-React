import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Tomate', price: 1500, img: '/productos/lechigas.jpg' },
    ],
  };
  render() {
    return (
      <div>
        <p>Hola mundo</p>
      </div>
    );
  }
}

export default App;
