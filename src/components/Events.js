import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-simple-flex-grid'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Footer from './Footer.js'
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
          setPage(data.eventCollection.items)
        })
    }, []);
  
    //loading page
    if (!page) {
      return "Loading...";
    }

    const eventArray = page.map(function(event, id){
        return(
        <Col span={4} style={{marginBottom: '30px'}}>
          <Card>
            <Card.Img key={id} style={styles.image} variant="top" src={event.image.url} />
            <Card.Body>
              <Card.Title key={id} style={{fontSize: "36px"}} >{event.title}</Card.Title>
              <Card.Text key={id}>{event.cardText}</Card.Text>
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
                <Row>
                  {eventArray}
                </Row>
            </div>
        )
    }

const styles = {
    main: {
        fontSize: '64px',
        marginLeft: '20px',
        marginBottom: '20px',
        color: '#fff'
    },
    image: {
        width: '450px',
        height: '300px'
    },
    body: {
        height: '100%',
        backgroundColor: '#10011d',
    },
    title: {
        borderBottom: '5px solid #44d9e8',
    },
    button: {
        width: '50%',
        marginLeft: '25%'
    }
}