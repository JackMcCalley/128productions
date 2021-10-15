import React, { useContext, useEffect } from 'react'
import { ShopContext } from './context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'
// import Client from 'shopify-buy'
// import storefrontAccessToken from './shopify/Storefront'
// import Products from './shopify/Products'
// import Product from './shopify/Product'
import Cart from './shopify/Cart'
// import VariantSelector from './shopify/VariantSelector'



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
                        <Link to={`/product/${product.id}`}>
                            <Div p="2rem">
                                <Div
                                    h="10rem"
                                    w="10rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                />
                                <Text>{product.title}</Text>
                                <Text>${product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Merch;