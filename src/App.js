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

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate de Button', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('desmontando componente de Button', this.props, this.state);
  }

  render() {
    console.log('ejecutando método render de button');
    return <button onClick={() => this.setState({ prop: 2 })}>Enviar</button>;
  }
}

class App extends React.Component {
  state = { valor: 3 };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button className={`${this.state.valor}`} onClick={() => this.setState({ valor: 2 })}>
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;
