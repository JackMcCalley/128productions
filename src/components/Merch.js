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

    if(!products) return <div>Loading...</div>
    return(
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id}>
                        <Card>
                        <Link to={`/product/${product.id}`}>
                            <Div p="2rem">
                                <Div
                                    h="12rem"
                                    w="12rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                />
                                <Card variant='dark'>
                                    <Card.Title variant='dark'>{product.title}</Card.Title>
                                    <Card.Text>${product.variants[0].price}</Card.Text>
                                </Card>
                            </Div>
                        </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Merch;