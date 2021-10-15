import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Image } from 'atomize'
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
            <Div>
              <Col size="6" style={{paddingBottom: '30px'}} class="gallery__item gallery__item--2">
                <Container justify="center" align="center" w='auto'>
                <div class="img__wrap">
                  <div class="container">
                    <Image h="30rem" w="30rem" alt="artist" style={{display: 'block'}} class="img__img" src={collective.artistImage.url} />
                    <p class="centered">{collective.artistName}</p>
                  </div>
                  <div class="img__description_layer">
                    <p class="img__description">{collective.artistImage.description}</p>
                  </div>
                </div>
                </Container>
              </Col>
            </Div>
          )
      })

      return(
      <div style={{backgroundColor: '#10011d'}}>
        <Row style={styles.title}>
          <span style={styles.titletext}>COLLECTIVE</span>   
        </Row>
        <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}} class="centered2">
          {collectiveArray}
        </Container>
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