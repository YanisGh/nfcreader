import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         NFC Reader App
        </p>
        <button onClick={handleClick}>
          Scan me
        </button>
      </header>
    </div>
  );
}

export default App;
