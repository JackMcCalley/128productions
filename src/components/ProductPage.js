import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from './context/shopContext'
import { Text, Div, Button, Row, Col, Container, Dropdown, Anchor } from 'atomize'



const ProductPage = () => {

    const [show, setShow] = useState(0);
    const [variants, setVariants] = useState();

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return() => {

        }
    }, [ fetchProductWithId, id ])

    if(!product.title) return <div>Loading...</div>

    const { showDropdown } = show;

    return(
        <Container>
            <Row>
                <Col>
                    <Div bgImg={product.images[0].src} bgSize="cover" bgPos="center center" h="15rem" w="15rem" />
                </Col>
                <Col>
                    <Text>{product.title}</Text>
                    <Text>${product.variants[0].price}</Text>
                    <Button onClick={() => {
                        addItemToCheckout(product.variants[0].id, 1)
                        openCart()
                        }}>
                        Add To Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage