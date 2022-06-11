import React, { Component, useState } from 'react';

class App extends Component {
  state = { contador: 0 };

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

// const App = () => {
//   const [contador, setContador] = useState(0);
//   return (
//     <div>
//       Contador:{contador}
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//     </div>
//   );
// };
export default App;
