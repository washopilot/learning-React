import Button from './Button';

const App = () => {
  const miVariable = true;
  if (miVariable) return <p>Mi Variable dió True!</p>;

  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      <Button onClick={() => console.log('clickeado')}>Enviar</Button>
    </div>
  );
};

export default App;
