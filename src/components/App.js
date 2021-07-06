import React from 'react';
import Content from './Content.js'
import 'bootswatch/dist/vapor/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Content style={{height: '100vh', minHeight: '100vh', backgroundColor: 'black'}}/>
      </header>
    </div>
  );
}

export default App;
