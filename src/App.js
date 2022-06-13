import { useRef } from 'react';

const App = () => {
  const ref = useRef();
  const click = () => {
    console.log(ref.current);
    // ref.current.innerHTML = 'Chanchito feliz'   -- Mala práctica
  };

  return (
    <div onClick={click} ref={ref}>
      lala
    </div>
  );
};

export default App;
