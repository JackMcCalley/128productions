import React, {useState, useEffect} from 'react';
import {Row, Col, Div, Collapse, Text, Container} from 'atomize'
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

    const today = new Date();

    //displays future events
    const eventArray = page.map(function(event, id){
      let title = event.title
      let eventDate = new Date(event.date)
      eventDate.setDate(eventDate.getDate() + 1)
      console.log(eventDate);
      if (title.length > 50){
        title = title.substring(0,30) + "..."
      } else if (title.length < 15){
        title = title + "               "
      }
      if (today < eventDate){
        return(  
          <Col size={{sm: "12", md: '6', lg: '4'}} style={{marginBottom: '30px'}} h="auto">
            <Card bg='black' border='light' style={{width: '20rem', alignItems: 'stretch'}}>
              <Div 
                w= {{xs: '19.8rem', md: '19.8rem'}}
                h= {{xs: '19.8rem', md: '19.8rem'}}
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
              <Button href={event.ticketLink} style={styles.button} bg="light" variant="light"><i><u>TICKETS</u></i></Button>
            </Card>
          </Col>
          )
      } else return <div></div> 
    })

    //displays past events
    const pastEvents = page.map(function(event, id){
      let title = event.title
      let eventDate = new Date(event.date)
      eventDate.setDate(eventDate.getDate() + 1)
      if (title.length > 50) {
        title = title.substring(0,30) + "..."
      } else if (title.length < 15){
        title = title + "               "
      }
      if (today > eventDate){
        return(
          <Col size={{sm: "12", md: '6', lg: '4'}} style={{marginBottom: '30px'}} h="auto">
            <Card bg='black' border='light' style={{width: '20rem', alignItems: 'stretch'}}>
              <Div 
                w= {{xs: '19.8rem', md: '19.8rem'}}
                h= {{xs: '19.8rem', md: '19.8rem'}}
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
                    d="flex" 
                    flexWrap="wrap" 
                    justify='start' 
                    flexDir={{ xs: 'column', lg: 'row'}} 
                    maxH={{ xs: 'auto', lg: '100vp'}}
                    style={{marginLeft: '5%'}}
                  >
                    {eventArray}
                  </Row>
                <Row w='100vw' justify='center'>
                  <Button onClick={pastClick} size='lg' variant='light' style={{width: '15rem', height: '5rem', marginBottom: '1rem'}}>
                    <Text textSize={{xs: 'title', lg: 'display1'}}><i><u>Past Events</u></i> ↓<b></b></Text>
                  </Button>
                </Row>
                <Collapse isOpen={show}>
                  <Row 
                    d="flex" 
                    flexWrap="wrap" 
                    justify='start' 
                    flexDir={{ xs: 'column', lg: 'row'}} 
                    maxH={{ xs: 'auto', lg: '100vp'}}
                    style={{marginLeft: '5%'}}>
                    {pastEvents}
                  </Row>
                </Collapse>
            </Div>
        )
    }

const styles = {
    main: {
        fontSize: '48px',
        marginBottom: '20px',
        color: '#fff',
        justifyContent: 'start',
        marginLeft: '5%'
    },
    title: {
        borderBottom: '5px solid #44d9e8',
        justifyContent: 'center'
    },
    button: {
        width: '15rem',
    }
}