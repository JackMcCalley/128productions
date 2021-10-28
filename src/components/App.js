import React from 'react';
import Content from './Content.js'
import 'bootswatch/dist/vapor/bootstrap.min.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"
import ShopProvider from './context/shopContext.js';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <div className="App">
          <header className="App-header">
            <Content/>
          </header>
        </div>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
