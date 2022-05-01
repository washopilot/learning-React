// import logo from './logo.svg';
import './App.css';

const Li = ({ children }) => {
  return <li className="clase-li">{children}</li>;
};

const App = () => {
  const valor = 'triste';
  return (
    <ul className="clase-css">
      <Li estado={'feliz'}>valor de li</Li>
    </ul>
  );
};

export default App;
