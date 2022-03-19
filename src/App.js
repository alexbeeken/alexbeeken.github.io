import './App.css';
import KeyNav from './key-nav.js';

function App() {
  return (
    <div className="App">
      <h1>All Keys, All Scales</h1>   
      <ul className="navbar-nav mr-auto">
        <KeyNav />
      </ul>
    </div>
  );
}

export default App;
