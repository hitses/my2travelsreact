import React from 'react';
import Travels from './components/travels';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My2Travels</h1>
      </header>
      <section>
          <Travels></Travels>
      </section>
    </div>
  );
}

export default App;
