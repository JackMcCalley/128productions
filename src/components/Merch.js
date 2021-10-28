import React, { useContext, useEffect } from 'react'
import { ShopContext } from './context/shopContext'
import { Container, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const Merch = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
        }
    }, [fetchAllProducts])

    return(
        <div style={{paddingTop: '2rem'}}>
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} style={{marginBottom: '1rem'}}>
                        <Card border='light' bg='white'>
                        <Link to={`/product/${product.id}`}>
                            <Div p="2rem" w='18rem' h='23rem'>
                                <Div
                                    h="15rem"
                                    w="15rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                />
                                <Card.Body variant='dark' style={{height: '10rem', marginBottom: '1rem'}}>
                                    <Card.Title style={{color: 'black'}} variant='dark'>{product.title}</Card.Title>
                                    <span style={{color: 'black'}}>${product.variants[0].price}</span>
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