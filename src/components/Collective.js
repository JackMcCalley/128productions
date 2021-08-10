import { render } from '@testing-library/react'
import React, {Component} from 'react'
import {Row, Col} from 'simple-flexbox'
import Image from 'react-bootstrap/Image'
import rc3cut from '../images/rc3cut.jpg'
import wessydecut from '../images/wessydecut.png'
import djvexx from '../images/djvexx.jpeg'
import dugan from '../images/dugan.png'
import joshfedz from '../images/joshfedz.jpg'
import phattjazz from '../images/phattjazz.png'
import {MDBRipple} from 'mdb-react-ui-kit'
import './hover.css'

export default class Collective extends React.Component {
    render(){
        return(
        <div style={{backgroundColor: '#10011d'}}>
            <Row style={styles.title}>
                <span style={styles.titletext}>COLLECTIVE</span>   
            </Row>
            <Row style={{width: '100%', backgroundColor: '#10011d', justifyContent: 'space-around', paddingBottom: '50px'}}>
                <img style={styles.pics} src={rc3cut} />
                <img style={styles.pics} src={wessydecut} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#10011d', justifyContent: 'space-around', paddingBottom: '50px'}}>
                <img style={styles.pics} src={djvexx} />
                <img style={styles.pics} src={dugan} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#10011d', justifyContent: 'space-around', paddingBottom: '50px'}}>
                <img style={styles.pics} src={joshfedz} />
                <img style={styles.pics} src={phattjazz} />
            </Row>
        </div>
        )
    }
}

const styles = {
    title: {
        backgroundColor: '#10011d',
        fontSize: '72px',
        fontFamily: 'Inherit',
        marginLeft: '20px',
        color: 'white'
    },
    pics: {
        width: '40%',
    },
    titletext:{
        borderBottom: '5px solid #44d9e8',
        paddingRight: '75px',
        marginBottom: '20px'
    },
}