import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Div, SideDrawer, Text, Row, Col, Anchor } from 'atomize'
import { Button } from 'react-bootstrap'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeItemFromCheckout } = useContext(ShopContext)

    const removeItem = (item) => {
        console.log(item.id);
        removeItemFromCheckout(item.id).then(response => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            <Div d="flex" flexDir="column" m={{ b: "4rem" }}>
                <Row justify="flex-end">
                    <Button bg="outline-light" variant="outline-light" style={{color: '#6bcbd3'}} onClick={closeCart}>
                        X
                    </Button>
                </Row>
                {checkout.lineItems && checkout.lineItems.map(item => (
                    <Row key={item.id}>
                        <Col>
                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center center" h="10rem" w="10rem"/>
                        </Col>
                        <Col>
                        <Row>
                            <Text>{item.title}</Text>
                        </Row>
                        <Row>
                            <Text>{item.variant.title}</Text>
                        </Row>
                        <Row>
                            <Text>${item.variant.price * item.quantity}</Text>
                        </Row>
                            <Row>
                                <Text>Quantity: {item.quantity}</Text>
                                <Button 
                                    onClick={() => {removeItem(item)}} 
                                    size='sm' 
                                    variant='secondary'
                                    style={{marginLeft: '5px'}}
                                >
                                        X
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                ))}
                <Anchor 
                    p="1rem" 
                    m="1rem" 
                    textSize="heading" 
                    textColor="white" 
                    textAlign='center' 
                    bg="black" 
                    hoverTextColor="gray" 
                    style={styles.checkout} 
                    href={checkout.webUrl} 
                    target="_blank"
                >
                    CHECKOUT
                </Anchor>
            </Div>
        </SideDrawer>
    )
}

const styles= {
    checkout: {
        borderRadius: '1px',
    }
}

export default Cart