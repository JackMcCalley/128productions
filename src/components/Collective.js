import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Image, Text, Modal, Icon } from 'atomize'
import { Button } from 'react-bootstrap'
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
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
      
      const AlignStartModal = ({ isOpen, onClose, collective }) => {
        return(
          <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
            <Icon
              name="Cross"
              pos="absolute"
              top="1rem"
              right="1rem"
              size="16px"
              onClick={onClose}
              cursor="pointer"
            />
            <Div d="flex" m={{ b: "4rem" }}>
              <Text textColor="black" p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
                {collective}
              </Text>
            </Div>
          </Modal>
        )
      }

      const collectiveArray = page.map(function(collective, id){
        
        let collectiveText = collective.artistName
        return(
            <Col size="6" style={{paddingBottom: '30px'}}>
              <Container 
                flexDir={{xs: 'col', md: 'row'}} 
                flexWrap="wrap"
              >
                <Div 
                  bg="black" 
                  w= {{xs: '20rem', md: '30rem'}}
                  h= {{xs: '20rem', md: '30rem'}}
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
                    textWeight="600" 
                    textColor="#ec2163"  
                    pos='absolute'
                    textSize="4rem" 
                    d="flex"
                    p="1rem"
                    flexWrap='wrap'
                    transform={{xs: 'translateY(50%)', md: 'translateY(200%)'}}
                  >
                    {collectiveText}
                  </Text>
                </Div>
                <Div>
                <Button variant='dark' onClick={handleShow}>
                  Read more...
                </Button>
                  <AlignStartModal
                    isOpen={show}
                    onClose={handleClose}
                    collective={collective.artistImage.description}
                  />
                </Div>
              </Container>
            </Col>
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