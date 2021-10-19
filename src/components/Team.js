import React, {useState, useEffect} from 'react'
import { Row, Col, Container, Div, Image, Text } from 'atomize'

import '../css/collective.css'

const query = `
{
    teamCollection{
      items{
        teamName
        teamDescription
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
  const [isShown, setIsShown] = useState(false)

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
      let teamText

      if(isShown){
        teamText = team.teamImage.description
      } else {
        teamText = team.teamName
      }
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
                  src={team.teamImage.url}
                />
                <Text 
                  textWeight="500" 
                  textColor="#6bcbd3"  
                  pos='absolute'
                  textSize="4rem" 
                  d="flex"
                  p="1rem"
                  flexWrap='wrap'
                  transform={{xs: 'translateY(20%)', md: 'translateY(150%)'}}
                >
                  {teamText}
                </Text>
              </Div>
            </Container>
          </Col>
        )
    })

    return(
    <div style={{backgroundColor: '#10011d'}}>
      <Row style={styles.title}>
        <span style={styles.titletext}>TEAM</span>   
      </Row>
      <Container d="flex" flexWrap="wrap" flexDir={{ xs: 'column', lg: 'row'}} class="centered2">
        {teamArray}
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