import React from 'react';

class Button extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    console.log('constructor', props);
  }

  componentDidMount() {
    console.log('componentDidMount de Button');
  }

  render() {
    console.log('ejecutando método render de button');
    return <button>Enviar</button>;
  }
}

class App extends React.Component {
  state = { valor: 3 };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo</p>
        <Button chanchito="feliz" />
        <button className={`${this.state.valor}`} onClick={() => this.setState({ valor: 2 })}>
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;
