import React, {useState, useEffect} from 'react'
import { Container, Row } from 'atomize'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const query = 
`
  {
    photoGalleryCollection{
      items{
        title
        description
        image {
          url
        }
      }
    }
  }
`

export default function Gallery() {

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
          setPage(data.photoGalleryCollection.items)
        })
    }, []);
  
    //loading page
    if (!page) {
      return "Loading...";
    }

    const galleryArray = page.map(function(gallery, id){
        return(
                <div>
                  <img
                    alt="gallery"
                    src={gallery.image.url}
                  />
                </div>
                
        )
    })

        return(
        <div style={styles.main}>
            <Row style={styles.title}>
                <span style={styles.titletext}>GALLERY</span>
            </Row>
            <Container w={{xs: '100%', md: '55%'}} backgroundColor="#10011d">
                <Carousel autoplay style={styles.carousel}>
                    {galleryArray}
                </Carousel>
            </Container>
        </div>
        )
}

const styles = {
    title:{
        fontSize: '48px',
        color: "white",
        justifyContent: 'center'
    },
    titletext:{
        borderBottom: '5px solid #44d9e8',
        marginBottom: '20px',
    }
}