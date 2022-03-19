import './App.css';
import KeyNav from './key-nav.js';

function App() {
  return (
    <div className="App">
      <h1>All Keys, All Scales</h1>   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <KeyNav />
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
