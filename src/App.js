import Button from './Button';

const arr = ['chanchito feliz', 'chanchito triste', 'chanchito emocionado'];

const App = () => {
  const miVariable = false;
  if (miVariable) return <p>Mi Variable dió True!</p>;
  return (
    <div>
      <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
      {arr.map((el, idx) => (
        <p key={idx}>{el}</p>
      ))}
      <Button onClick={() => console.log('clickeado')}>Enviar</Button>
    </div>
  );
};

export default App;
