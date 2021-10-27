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
      let title = event.title
      if (title.length > 50){
        title = title.substring(0,30) + "..."
      } else if (title.length < 15){
        title = title + "               "
      }

        return(
        <Col size="4" style={{marginBottom: '30px', alignItems: 'space-around'}} h="auto">
          <Card style={{alignItems: 'stretch'}}>
            <Div 
              bg="black" 
              w= {{xs: '15rem', md: '20rem'}}
              h= {{xs: '15rem', md: '20rem'}}
              justify='center' 
              align='center' 
              d='flex'
            >
            <Card.Img key={id} variant="top" src={event.image.url} />
            </Div>
            <Card.Body style={{width: "20rem", height: '15rem'}}>
              <Card.Title key={id} style={{fontSize: "2rem"}} >{title}</Card.Title>
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
            <Div h="100%" w="100%" justify="space-around" style={styles.body}>
                <Row justify='space-around' style={styles.main}>
                    <span style={styles.title}>EVENTS</span>
                </Row>
                <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}} maxH={{ xs: 'auto', md: '100vp'}}>
                  {eventArray}
                </Container>
            </Div>
        )
    }

const styles = {
    main: {
        fontSize: '48px',
        marginLeft: '12rem',
        marginBottom: '20px',
        color: '#fff',
    },
    body: {
        // backgroundColor: '#10011d',
    },
    title: {
        borderBottom: '5px solid #44d9e8',
    },
    button: {
        width: '15rem',
        // marginLeft: '25%'
    }
}