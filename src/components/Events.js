import React, {useState, useEffect} from 'react';
import {Row, Col, Div, Container} from 'atomize'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "react-simple-flex-grid/lib/main.css";

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
      ticketLink
    }
  }
}`

export default function Events() {

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
          let sortedData = data.eventCollection.items
          sortedData.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
          })
          setPage(data.eventCollection.items)
        })
    }, []);
  
    //loading page
    if (!page) {
      return "Loading...";
    }

    const eventArray = page.map(function(event, id){
        return(
        
        <Col size="4" style={{marginBottom: '30px', alignItems: 'stretch'}} h="auto">
          <Card style={{alignItems: 'stretch'}}>
            <Div 
              bg="black" 
              w= {{xs: '10rem', md: '15rem'}}
              h= {{xs: '10rem', md: '15rem'}}
              justify='center' 
              align='center' 
              d='flex'
            >
            <Card.Img key={id} variant="top" src={event.image.url} />
            </Div>
            <Card.Body style={{width: "15rem"}}>
              <Card.Title key={id} style={{fontSize: "2rem"}} >{event.title}</Card.Title>
              <Card.Text  key={id}>{event.cardText}</Card.Text>
              <Card.Text key={id}>{event.date}</Card.Text>
              <Card.Text key={id}>{event.location}</Card.Text>
            </Card.Body>
            <Button key={id} href={event.ticketLink} style={styles.button} bg="outline-light" variant="outline-light">TICKETS</Button>
          </Card>
        </Col>
        )
      })

        return(
            <div style={styles.body}>
                <Row style={styles.main}>
                    <span style={styles.title}>EVENTS</span>
                </Row>
                <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}} maxH={{ xs: 'auto', md: '100vp'}}>
                  {eventArray}
                </Container>
            </div>
        )
    }

const styles = {
    main: {
        fontSize: '64px',
        marginLeft: '20px',
        marginBottom: '20px',
        color: '#fff',
    },
    body: {
        height: '100%',
        backgroundColor: '#10011d',
        justifyContent: 'center'
    },
    title: {
        borderBottom: '5px solid #44d9e8',
    },
    button: {
        width: '15rem',
        // marginLeft: '25%'
    }
}