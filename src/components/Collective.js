import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Image, Text } from 'atomize'
import { Button, Card } from 'react-bootstrap'
import '../css/collective.css'
import ReactModal from 'react-modal'

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
            setPage(data.collectiveCollection.items)
          })
      }, []);

      //loading page
      if (!page) {
        return "Loading...";
      }

      const collectiveArray = page.map(function(collective, id){
        let collectiveText = collective.artistName
        let collectiveDescription = collective.artistImage.description
        
        return(
            <Col key={id} size="6" style={{paddingBottom: '30px'}}>
              <Card border='secondary' bg='black'>
              <Container 
                flexDir={{xs: 'col', md: 'row'}} 
                flexWrap="wrap"
              >
                <Div 
                  bg="black" 
                  w={{xs: '20rem', md: '30rem'}}
                  h={{xs: '20rem', md: '30rem'}}
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
                    maxW= {{xs: '20rem', md: '30rem'}}
                    maxH= {{xs: '20rem', md: '30rem'}}
                    alt="artist" 
                    src={collective.artistImage.url}
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
                    {collectiveText}
                  </Text>
                </Div>
                <Div>
                <Button variant='light' onClick={() => {setDescription(collectiveDescription); setIsOpen(true); console.log(collectiveDescription);}}>
                  Read more...
                </Button>
                </Div>
              </Container>
              </Card>
            </Col>
          )
      })    
      
      return(
      <div id='main'>
        <Row style={styles.title}>
          <span style={styles.titletext}>COLLECTIVE</span>   
        </Row>
        <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}}>
          {collectiveArray}
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
                color: 'black'
              }}}
            contentLabel="More Info"
            ariaHideApp={false}
          >
            <Text>
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
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      color: 'black',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
}