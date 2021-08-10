import React from 'react';
import {Navbar, Image, Nav, Button} from 'react-bootstrap'
import Logo128 from '../images/Logo128.png';
import FB from '../images/FB.png'
import TW from '../images/TW.png'
import YT from '../images/YT.png'
import IG from '../images/IG.png'
import './boot.css'

class Navigation extends React.Component {
    render(){
        return(
            <div style={{backgroundColor: '#10011d'}}>
                <Navbar bsClass="custom-class" style={{width:'100%', justifyContent: 'space-around', marginRight: '10%', backgroundColor: '#10011d'}} bg="dark" variant="dark">
                    <Navbar.Brand href="/"><Image src={Logo128} /></Navbar.Brand>
                    <Nav style={{fontSize:'28px'}}>
                        <Nav.Link href='/'>HOME</Nav.Link>
                        <Nav.Link href='/photos'>PHOTOS</Nav.Link>
                        <Nav.Link href='/events'>EVENTS</Nav.Link>
                        <Nav.Link href='/collective'>COLLECTIVE</Nav.Link>
                        <Nav.Link href='/merch'>MERCH</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button style={{marginRight: '5px'}} bg="outline-light" variant="outline-light" href="https://www.facebook.com/Productions128" target="_blank"><Image src={FB}/></Button>
                        <Button style={{marginRight: '5px'}} bg="outline-light" variant="outline-light" href="https://twitter.com/weare128" target="_blank"><Image src={IG}/></Button>
                        <Button style={{marginRight: '5px'}} bg="outline-light" variant="outline-light" href="https://www.instagram.com/128_productions/" target="_blank"><Image src={TW}/></Button>
                        <Button style={{marginRight: '5px'}} bg="outline-light" variant="outline-light" href="https://www.youtube.com/channel/UCtuwYGxzqkVmJTzFbBPTfug" target="_blank"><Image src={YT}/></Button>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;