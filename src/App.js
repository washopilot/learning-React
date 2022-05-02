import Button from './Button';

const arr = {
  key1: 'chanchito feliz',
  key2: 'chanchito triste',
  key3: 'chanchito emocionado',
};

const App = () => {
  const miVariable = false;
  if (miVariable) return <p>Mi Variable dió True!</p>;
  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      {Object.keys(arr).map((key, idx) => (
        <p key={idx}>{arr[key]}</p>
      ))}
      <Button onClick={() => console.log('clickeado')}>Enviar</Button>
    </div>
  );
};

export default App;
