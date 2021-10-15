import React, {useState, useEffect} from 'react';
import Content from './Content.js'
import 'bootswatch/dist/vapor/bootstrap.min.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"
import ShopProvider from './context/shopContext.js';

const query = `
{
  eventCollection {
    items {
      title
      date
      image {
        url
      }
      location
    }
  }
}`

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();

function App() {

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/ohhrj9kqgtb2/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //authenticate the request
          Authorization: "Bearer hBWCYQUnz4Az_W-LftMbQByKRMfq88E5vpQg7zIKDPc",
        },
        //send the GraphQL query
        body: JSON.stringify({query}),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if(errors) {
          console.error(errors);
        }

        //rerender the entire component with new data
        setPage(data.eventCollection.items[0])
      })
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <ShopProvider >
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <div className="App">
          <header className="App-header">
            <Content style={{height: '100vh', minHeight: '100vh', backgroundColor: 'black'}}/>
          </header>
        </div>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
