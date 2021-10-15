import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Div, SideDrawer, Text, Row, Col, Anchor} from 'atomize'
import { Button } from 'react-bootstrap'

const Cart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

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
                            <Text>{item.title}</Text>
                            <Text>{item.variant.title}</Text>
                            <Text>Quantity: {item.quantity}</Text>
                        </Col>
                        <Col>
                            <Text>${item.variant.price}</Text>
                        </Col>
                    </Row>
                ))}
                <Anchor p="1rem" m="1rem" textSize="heading" textColor="black" textAlign='center' bg="#6bcbd3" style={styles.checkout} href={checkout.webUrl} target="_blank">CHECKOUT</Anchor>
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