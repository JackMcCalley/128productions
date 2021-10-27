import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Image, Text } from 'atomize'
import { Button } from 'react-bootstrap'
import '../css/collective.css'
import ReactModal from 'react-modal'

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
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [description, setDescription] = useState(null)

  function closeModal(){
    setIsOpen(false)
  }

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
          <Col size="6" style={{paddingBottom: '30px'}}>
            <Container 
              flexDir={{xs: 'col', lg: 'row'}} 
              flexWrap="wrap"
            >
              <Div 
                bg="black" 
                w= {{xs: '20rem', lg: '30rem'}}
                h= {{xs: '20rem', lg: '30rem'}}
                justify='center' 
                align='center' 
                d='flex'

              >
                <Image
                  pos='static' 
                  top='0' 
                  right='0' 
                  h='auto' 
                  w='auto' 
                  maxW= {{xs: '20rem', lg: '30rem'}}
                  maxH= {{xs: '20rem', lg: '30rem'}}
                  alt="artist" 
                  src={team.teamImage.url}
                />
                <Text  
                  textColor="white"  
                  pos='absolute'
                  d="flex"
                  p={{x: "3rem", y: '.8rem'}}
                  flexWrap='wrap'
                  transform={{xs: 'translateY(125%)', md: 'translateY(210%)'}}
                  bg="#44d9e8"
                  textAlign='center'
                >
                  <span><span style={{fontSize: '1.5rem'}}>{teamText}</span><br/><span style={{fontSize: '1rem'}}><i>{team.title}</i></span></span>
                </Text>
              </Div>
              <Div>
                <Button variant='dark' onClick={() => {setDescription(teamDescription); setIsOpen(true); console.log(teamDescription);}}>
                  Read more...
                </Button>
              </Div>
            </Container>
          </Col>
        )
    })

    return(
      <div id='main' >
      <Row style={styles.title}>
        <span style={styles.titletext}>TEAM</span>   
      </Row>
      <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}}>
        {teamArray}
      </Container>
      <Div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: styles.content,
            overlay: {
              width: '80%',
              height: '1rem',
              marginLeft: '10%',
              marginTop: '25%',
              backgroundColor: 'white',
              color: 'black'
            }}}
          contentLabel="More Info"
          ariaHideApp={false}
        >
          <Text textAlign='center'>
            {description}
          </Text>
          <Button variant='dark' onClick={closeModal}>
            Close
          </Button>
        </ReactModal>
      </Div>
    </div>
    )
  }

const styles = {
  title: {
      fontSize: '48px',
      fontFamily: 'Inherit',
      marginLeft: '12rem',
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
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',

  }
}