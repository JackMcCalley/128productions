import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Text } from 'atomize'
import { Button, Card, Modal, Image } from 'react-bootstrap'
import '../css/collective.css'
import '../css/modal.css'

const query = `
{
    teamCollection{
      items{
        teamName
        teamDescription
        title
              teamImage {
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
  const [description, setDescription] = useState(null)
  const [name, setName] = useState(null)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          setPage(data.teamCollection.items)
        })
    }, []);

    //loading page
    if (!page) {
      return "Loading...";
    }

    const teamArray = page.map(function(team, id){
      let teamText = team.teamName
      let teamDescription = team.teamImage.description
      return(
        <Col key={id} size={{sm: '11', md: '6'}} style={{paddingBottom: '30px'}}>
        <Container 
          flexDir={{xs: 'col', md: 'row'}} 
          flexWrap="wrap"
          border='solid'
          borderColor='info400'
          justify='center'
          w={{xs: '20rem', md: '30rem'}}
          h={{xs: '20rem', md: '30rem'}}
          align='center' 
          d='flex'
          bg='black'
        >
          <Image
            fluid
            style={styles.image}
            alt="artist" 
            src={team.teamImage.url}
            style={{padding: '5px', maxHeight: '20rem'}}
          />
          <Text 
            textColor="white"  
            pos='absolute'
            textSize='2rem'
            d="flex"
            p={{x: "3rem", y: '1rem'}}
            flexWrap='wrap'
            transform={{xs: 'translateY(180%)', md: 'translateY(300%)'}}
            bg="#ec2163"
          >
            {teamText}
          </Text>
        </Container>
        <Div m={{x: '40%'}} w='10rem'>
        <Button variant='light' onClick={() => {setDescription(teamDescription); setName(teamText); handleShow()}}>
            <i><u>Read more...</u></i>
        </Button>
        </Div>
      </Col>
        )
    })

    return(
      <div id='main'>
        <Row style={styles.title}>
          <span style={styles.titletext}>TEAM</span>   
        </Row>
        <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}}>
          {teamArray}
        </Container>
        <Modal className="special_modal" bgColor="white" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

const styles = {
  title: {
    fontSize: '48px',
    fontFamily: 'Inherit',
    color: 'white',
    justifyContent: 'center'
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
},
content: {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  color: 'black',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
},
image: {
  position:'static',
  top:'0',
  right:'0',
  height:'auto',
  width:'auto',
  maxWidth:'20rem',
  maxHeight:'20rem'
}
}