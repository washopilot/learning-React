import React from 'react';

const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const App = () => {
  return <MiComponente miProp={'chanchito feliz'} />;
};

export default App;
