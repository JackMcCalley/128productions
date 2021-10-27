import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './context/shopContext'
import { Container, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../css/background.css'



const Merch = () => {

    const { fetchAllProducts, products, fetchAllCollections, collections } = useContext(ShopContext)
    const { collection, setCollection } = useState([])

    useEffect(() => {
        fetchAllProducts()
        return () => {
        }
    }, [fetchAllProducts])



    if(!products) return <div>Loading...</div>

    console.log(products);
    return(
        <div class="background" style={{paddingTop: '2rem'}}>
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} style={{marginBottom: '1rem'}}>
                        <Card border='light' >
                        <Link to={`/product/${product.id}`}>
                            <Div p="2rem" w='20rem'>
                                <Div
                                    h="15rem"
                                    w="15rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                />
                                <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                                    <Card.Title variant='dark'>{product.title}</Card.Title>
                                    <Card.Text>${product.variants[0].price}</Card.Text>
                                </Card.Body>
                            </Div>
                        </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    )
}

export default Merch;