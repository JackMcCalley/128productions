import React, { useState, useEffect} from 'react'
import {Row} from 'simple-flexbox'
import YoutubeEmbed from './YoutubeEmbed.js'
import "../css/youtubeEmbed.css"
import { Div } from 'atomize'
import '../css/background.css'

const query = 
`
  {
    youtubeCollection{
      items{
        url
      }
    }
  }
`

export default function Home() {
    const [page, setPage] = useState(null);

    //Contentful query
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
          setPage(data.youtubeCollection.items[0])
        })
    }, []);
  
    //loading page
    if (!page) {
      return "Loading...";
    }
        return(
            <Div w="100%" h='100vp'>
                <Div w={{md: '70%'}} m={{l: {xs: '0%', md: '15%' }}} justify='center'>
                  <YoutubeEmbed style={styles.youtube} embedId={page.url} /> 
                </Div>
                <Row style={styles.center}>
                </Row>
            </Div>
        )
}

const styles = {
    youtube: {
        height: 'auto'
    },
    center: {
        justifyContent: 'center'
    }
}