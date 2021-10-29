import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from './context/shopContext'
import {  Div, Row, Col, Container, Dropdown, Anchor } from 'atomize'
import { Card, Button, Form } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                <Anchor key={index + 'key'} onClick={()=>handleSelect(variant)} key={index} d='block' p={{ y: "0.25rem" }}>
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

    const carouselImages = product.images.map(function(image, id){
        return(
            <div key={id + '__img_id'}>
                <img alt='' src={image.src} />
            </div>
        )
    })
            

    console.log(product.description);
    return(
        <Container h="100vp">
            <Row>
                <Col justify='center' align='center' style={{marginTop: '1rem'}}>
                    <Carousel>
                        {carouselImages}
                    </Carousel>
                </Col>
                <Col>
                    <Card style={{marginTop: "1rem"}} bg='white'>
                        <Card.Body>
                        <Card.Title style={{color: 'black'}}>
                            {product.title}
                        </Card.Title>
                        <Card.Text style={{color: 'black'}}>
                            ${product.variants[0].price * quantity}
                        </Card.Text>
                        <Form width="10rem" style={{color: 'black'}}>
                            <Form.Label style={{color: 'black'}}>Quantity</Form.Label>
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
                        <Card.Text style={{
                            marginTop: '1rem',
                            fontSize: '20px',
                            color: 'black'
                        }}>
                            {product.description}
                        </Card.Text>
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