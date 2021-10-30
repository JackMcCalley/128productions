import React, {useState, useEffect} from 'react';
import {Row, Col, Div, Collapse} from 'atomize'
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
    //show past event button handler
    const [show, setShow] = useState(false);

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

    //displays future events
    const eventArray = page.map(function(event, id){
      let title = event.title
      let eventDate = new Date(event.date)
      let today = new Date();
      today = today.setDate(today.getDate() + 2)
      if (title.length > 50){
        title = title.substring(0,30) + "..."
      } else if (title.length < 15){
        title = title + "               "
      }
      // if (today < eventDate){
        return(  
          <Col size="4" style={{marginBottom: '30px'}} h="auto">
            <Card bg='black' border='light' style={{width: '21rem', alignItems: 'stretch'}}>
              <Div 
                w= {{xs: '15rem', md: '20rem'}}
                h= {{xs: '15rem', md: '20rem'}}
                justify='center' 
                align='center' 
                d='flex'
              >
              <Card.Img variant="top" src={event.image.url} />
              </Div>
              <Card.Body style={{width: '20rem', height: '15rem'}}>
                <Card.Title style={{fontSize: "2rem"}} >{title}</Card.Title>
                <Card.Text>{event.cardText}</Card.Text>
                <Card.Text>{event.date}</Card.Text>
                <Card.Text>{event.location}</Card.Text>
              </Card.Body>
              <Button href={event.ticketLink} style={styles.button} bg="light" variant="light">TICKETS</Button>
            </Card>
          </Col>
          )
      // } else return <div></div>

        
    })

    //displays past events
    const pastEvents = page.map(function(event, id){
      let title = event.title
      let eventDate = new Date(event.date)
      let today = new Date();
      today.setDate(today.getDate() + 2)
      if (title.length > 50) {
        title = title.substring(0,30) + "..."
      } else if (title.length < 15){
        title = title + "               "
      }
      console.log(today);
      if (today > eventDate){
        return(
          <Col size="4" style={{marginBottom: '30px'}} h="auto">
            <Card bg='black' border='light' style={{width: '21rem', alignItems: 'stretch'}}>
              <Div 
                w= {{xs: '15rem', md: '20rem'}}
                h= {{xs: '15rem', md: '20rem'}}
                justify='center' 
                align='center' 
                d='flex'
              >
              <Card.Img variant="top" src={event.image.url} />
              </Div>
              <Card.Body style={{width: '20rem', height: '15rem'}}>
                <Card.Title style={{fontSize: "2rem"}} >{title}</Card.Title>
                <Card.Text>{event.cardText}</Card.Text>
                <Card.Text>{event.date}</Card.Text>
                <Card.Text>{event.location}</Card.Text>
              </Card.Body>
              <Button href={event.ticketLink} style={styles.button} bg="light" variant="light">TICKETS</Button>
            </Card>
          </Col>
        )
      } else return <div></div>
    })

    const pastClick = () => {
      setShow(!show)
    }

        return(
            <Div h="100%" w="100vp">
                <Row style={styles.main}>
                    <span style={styles.title}>EVENTS</span>
                </Row>
                <Row 
                  justify='space-between' 
                  d="flex" 
                  flexWrap="wrap" 
                  flexDir={{ xs: 'column', lg: 'row'}} 
                  maxH={{ xs: 'auto', md: '100vp'}}
                  style={{marginLeft: '8%'}}
                >
                  {eventArray}
                </Row>
                    {/* <Row w='100vw' justify='center'>
                    <Button onClick={pastClick} size='lg' variant='light' style={{fontSize: '36px', width: '50%', height: '5rem', marginBottom: '1rem'}}>Past Events</Button>
                    </Row>
                    <Collapse isOpen={show}>
                      <Row style={{marginLeft: '8%'}} h='100%'>
                        {pastEvents}
                      </Row>
                    </Collapse> */}
            </Div>
        )
    }

const styles = {
    main: {
        fontSize: '48px',
        marginBottom: '20px',
        color: '#fff',
        justifyContent: 'center'
    },
    title: {
        borderBottom: '5px solid #44d9e8',
        justifyContent: 'center'
    },
    button: {
        width: '15rem',
        // marginLeft: '25%'
    }
}