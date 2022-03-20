import './App.css';
import KeyNav from './key-nav.js';
import PianoArea from './piano-area.js';

function App() {
  return (
    <div className="App">
      <h1>All Keys, All Scales</h1>   
      <ul className="navbar-nav mr-auto">
        <KeyNav />
        <PianoArea />
      </ul>
    </div>
  );
}

export default App;
