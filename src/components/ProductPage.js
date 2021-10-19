import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from './context/shopContext'
import {  Div, Row, Col, Container, Dropdown, Anchor } from 'atomize'
import { Card, Button, Form } from 'react-bootstrap'




const ProductPage = () => {
    const [quantity, setQuantity] = useState(1)
    const [variant, setVariant] = useState()
    const [showDropdown, setShowDropdown] = useState(false)

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return() => {
        }
    }, [ fetchProductWithId, id ])

    if(!product.title) return (<div>Loading...</div>)

    if(!variant) {
        setVariant(product.variants[0])
    }

    const handleSelect = (variant) => {
        setVariant(variant)
        setShowDropdown(!showDropdown)
    }

    const variantList = (
        <Div>
            {product.variants.map((variant, index) => (
                <Anchor onClick={()=>handleSelect(variant)} key={index} d='block' p={{ y: "0.25rem" }}>
                    {variant.attrs.title.value}
                </Anchor>
            ))}
        </Div>
    )
    const variantDropdown = 
        <Dropdown
            isOpen={showDropdown}
            onClick={() =>
                setShowDropdown(!showDropdown)
            }
            menu={variantList}
        >
        {(!variant) ? "Options" : variant.attrs.title.value}
        </Dropdown>
        

    return(
        <Container h="100vp">
            <Row>
                <Col>
                    <Div bgImg={(!variant) ? product.images[0].src : variant.image.src} bgSize="cover" bgPos="center center" h={{xs: "15rem", md: "30rem"}} w={{xs: "15rem", md: "30rem"}} />
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            {product.title}
                        </Card.Title>
                        <Card.Text>
                            ${product.variants[0].price * quantity}
                        </Card.Text>
                        <Form width="10rem">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control 
                                style={{width: "10rem"}} 
                                type='number' 
                                placeholder="1"
                                value={quantity}
                                onChange={e => {
                                    setQuantity(e.target.value)
                                }}
                            />
                        </Form>
                        {variantDropdown}
                        <Button variant="dark" onClick={() => {
                            addItemToCheckout(variant.attrs.id.value, quantity)
                            openCart()
                            }}>
                            Add To Cart
                        </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage