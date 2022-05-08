import React, { Component } from 'react';

class Input extends Component {
  state = { valor: '' };

  handleChange = (value) => {
    this.setState({ valor: value });
  };

  render() {
    return <input value={this.state.value} onChange={(e) => this.handleChange(e.target.value)}></input>;
  }
}

class App extends Component {
  render() {
    return (
      <p>
        Nombre completo:
        <Input />
        <Input />
      </p>
    );
  }
}

export default App;
