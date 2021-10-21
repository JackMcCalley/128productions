import React from 'react'
import justlogo from '../images/justlogo.png'
import { Button} from 'react-bootstrap'
import FB from '../images/FB.png'
import TW from '../images/TW.png'
import YT from '../images/YT.png'
import IG from '../images/IG.png'
import {Row, Image} from 'atomize'

export default class Footer extends React.Component {
    render(){
        return(
            <div style={styles.main}>
            <Row style={{justifyContent: 'center'}}>
                <Image w={{xs: '8rem', md: 'auto'}} alt="logo" src={justlogo}/>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <p>Phone: (970) 986-9975</p>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <p>Email: AP@128productions.com</p>
            </Row>
            <Row justify="center">
                <Button style={styles.buttons} size="sm" bg="outline-light" variant="outline-light" href="https://www.facebook.com/Productions128" target="_blank"><Image src={FB}/></Button>
                <Button style={styles.buttons} size="sm" bg="outline-light" variant="outline-light" href="https://www.instagram.com/128_productions/" target="_blank"><Image src={IG}/></Button>
                <Button style={styles.buttons} size="sm" bg="outline-light" variant="outline-light" href="https://twitter.com/weare128" target="_blank"><Image src={TW}/></Button>
                <Button style={styles.buttons} size="sm" bg="outline-light" variant="outline-light" href="https://www.youtube.com/channel/UCtuwYGxzqkVmJTzFbBPTfug" target="_blank"><Image src={YT}/></Button>
            </Row>
            </div>
        )
    }
}

const styles = {
    buttons:{
        marginRight: '5px', 
        marginBottom: '10px'
    },
    // main: {
    //   backgroundColor: '#10011d',
    //   opacity: '1',
    //   backgroundSize: '38px 38px',
    //   backgroundImage:  'repeating-linear-gradient(0deg, #44d9e8, #44d9e8 1.9000000000000001px, #10011d 1.9000000000000001px, #10011d)'
    // }
}