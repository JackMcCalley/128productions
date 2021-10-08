import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import {Row, Column} from 'simple-flexbox'
import '../css/collective.css'

const query = `
{
    collectiveCollection{
      items{
        artistName
        artistDescription
              artistImage {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
      }
    }
  }`

export default function Collective() {

    const [page, setPage] = useState(null);

    const [collective, setCollective] = useState(0);

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
            setPage(data.collectiveCollection.items)
          })
      }, []);

      //loading page
      if (!page) {
        return "Loading...";
      }

      const collectiveArray = page.map(function(collective, id){
          return(
              <Row style={{paddingBottom: '30px'}} class="gallery__item gallery__item--2">
                <div class="img__wrap">
                  <div class="container">
                    <img style={styles.pics} class="img__img" src={collective.artistImage.url} />
                    <p class="centered">{collective.artistName}</p>
                  </div>
                  <div class="img__description_layer">
                    <p class="img__description">{collective.artistImage.description}</p>
                  </div>
                </div>
              </Row>
          )
      })

      return(
      <div style={{backgroundColor: '#10011d'}}>
        <Row style={styles.title}>
          <span style={styles.titletext}>COLLECTIVE</span>   
        </Row>
        <div class="centered2">
          {collectiveArray}
        </div>
      </div>
      )
    }

const styles = {
    title: {
        backgroundColor: '#10011d',
        fontSize: '64px',
        fontFamily: 'Inherit',
        marginLeft: '20px',
        color: 'white'
    },
    pics: {
        width: '100%',
        height: '100%'
    },
    titletext:{
        borderBottom: '5px solid #44d9e8',
        marginBottom: '20px'
    },
    center: {
      justifyContent: "center"
    }
}