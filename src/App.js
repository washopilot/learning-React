import React from 'react';

const App = () => {
  const input = React.useRef();
  const file = React.useRef();
  const submit = () => {
    console.log(input.current.value);
    console.log(file.current.files[0]);
    const form = new FormData();
    form.append('archivo', file.current.files[0]);
    form.append('campo', input.current.value);
    console.log(form);
    fetch('/lala', { method: 'POST', body: form });
  };

  return (
    <div>
      <div>
        <span>Lala</span>
        <input type={'text'} name="campo" ref={input}></input>
        <input type={'file'} ref={file}></input>
      </div>
      <input type={'submit'} value="Enviar" onClick={submit}></input>
    </div>
  );
};

export default App;
