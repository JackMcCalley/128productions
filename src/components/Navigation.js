import React, {useContext} from 'react';
import {Navbar, Image, Nav, Button, NavDropdown} from 'react-bootstrap'
import { Container, Anchor, Div } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from './context/shopContext';
import Logo128 from '../images/Logo128.png';
import FB from '../images/FB.png'
import TW from '../images/TW.png'
import YT from '../images/YT.png'
import IG from '../images/IG.png'
import './boot.css'

const Navigation = () => {

    const { openCart } = useContext(ShopContext)
        return(
                <Div style={{backgroundColor: '#10011d', fontSize: '2rem'}}>
                    <Navbar bsclass="custom-class" style={{width:'100%', justifyContent: 'space-around', marginRight: '10%', backgroundColor: '#10011d'}} bg="dark" variant="dark">
                    <Navbar.Brand href="/"><Image src={Logo128} /></Navbar.Brand>
                        <Nav>
                            <NavDropdown title="MENU">
                            <NavDropdown.Item href='/'>HOME</NavDropdown.Item>
                            <NavDropdown.Item href='/photos'>GALLERY</NavDropdown.Item>
                            <NavDropdown.Item href='/events'>EVENTS</NavDropdown.Item>
                            <NavDropdown.Item href='/collective'>COLLECTIVE</NavDropdown.Item>
                            <NavDropdown.Item href='/team'>TEAM</NavDropdown.Item>
                            <NavDropdown.Item href='/merch'>MERCH</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button style={styles.button} bg="outline-secondary" variant="outline-secondary" onClick={() => openCart()}>CART</Button>
                        {/* <Nav>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.facebook.com/Productions128" target="_blank"><Image src={FB}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://twitter.com/weare128" target="_blank"><Image src={IG}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.instagram.com/128_productions/" target="_blank"><Image src={TW}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.youtube.com/channel/UCtuwYGxzqkVmJTzFbBPTfug" target="_blank"><Image src={YT}/></Button>
                            
                        </Nav> */}
                    </Navbar>
                </Div>
        )
}

const styles = {
    button: {
        marginRight: '5px'
    }
}

export default Navigation;