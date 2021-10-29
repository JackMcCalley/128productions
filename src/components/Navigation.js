import React, {useContext, useState, useEffect} from 'react';
import {Navbar, Image, Nav, Button, NavDropdown} from 'react-bootstrap'
import { Div } from 'atomize'
import { ShopContext } from './context/shopContext';
import Logo128 from '../images/Logo128.png';
import FB from '../images/FB.png'
import TW from '../images/TW.png'
import YT from '../images/YT.png'
import IG from '../images/IG.png'
import './boot.css'

const Navigation = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 820

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    const { openCart } = useContext(ShopContext)
        return(
                <Div style={{backgroundColor: '#10011d', fontSize: '2rem'}}>
                    <Navbar 
                        bsclass="custom-class" 
                        style={{width:'100%', 
                        justifyContent: 'space-around', 
                        backgroundColor: '#10011d'}} 
                        bg="dark" 
                        variant="dark">
                    <Navbar.Brand href="/"><Image style={{width: '90%'}} src={Logo128} /></Navbar.Brand>
                    { width < breakpoint ?
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
                        :
                        <Nav>
                            <Nav.Link href='/'>HOME</Nav.Link>
                            <Nav.Link href='/photos'>GALLERY</Nav.Link>
                            <Nav.Link href='/events'>EVENTS</Nav.Link>
                            <Nav.Link href='/collective'>COLLECTIVE</Nav.Link>
                            <Nav.Link href='/team'>TEAM</Nav.Link>
                            <Nav.Link href='/merch'>MERCH</Nav.Link>
                        </Nav>
                        }
                        { width > breakpoint ?
                        <Nav>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.facebook.com/Productions128" target="_blank"><Image src={FB}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://twitter.com/weare128" target="_blank"><Image src={TW}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.instagram.com/128_productions/" target="_blank"><Image src={IG}/></Button>
                            <Button style={styles.button} bg="outline-light" variant="outline-light" href="https://www.youtube.com/channel/UCtuwYGxzqkVmJTzFbBPTfug" target="_blank"><Image src={YT}/></Button>
                            <Button style={styles.button} bg="outline-dark" variant="dark" onClick={() => openCart()}>CART</Button>
                        </Nav>
                        :
                        <Nav>
                            <Button style={styles.button} bg="outline-dark" variant="dark" onClick={() => openCart()}>CART</Button>
                        </Nav>
                        }
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