import React, {useState, useEffect} from 'react'
import {Row, Col} from 'simple-flexbox'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

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
          console.log(data)
        })
    }, []);
  
    //loading page
    if (!page) {
      return "Loading...";
    }

    const galleryArray = page.map(function(gallery, id){
      console.log(gallery.url)
        return(
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={gallery.image.url}
                  />
                </Carousel.Item>
                
        )
    })
        return(
        <div>
            <Row style={styles.title}>
                <span style={styles.titletext}>PHOTOS</span>
            </Row>
            <Row style={styles.carouselRow}>
            <Carousel style={styles.carousel}>
                {galleryArray}
            </Carousel>
            </Row>
        </div>
        )
}

const styles = {
    title:{
        fontSize: '64px',
        paddingLeft: '20px',
        backgroundColor: '#10011d',
        color: "white",
    },
    titletext:{
        borderBottom: '5px solid #44d9e8',
        marginBottom: '20px',
        backgroundColor: "#10011d"
    },
    carousel: {
        width: '70%',
        backgroundColor: "#10011d"
    },
    carouselRow: {
      backgroundColor: "#10011d"
    }
}