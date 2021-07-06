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

export default class Collective extends React.Component {
    render(){
        return(
        <div style={{backgroundColor: '#170229'}}>
            <Row style={styles.title}>
                <div>LINE UP</div>   
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={rc3cut} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={wessydecut} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={djvexx} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={dugan} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={joshfedz} />
            </Row>
            <Row style={{width: '100%', backgroundColor: '#170229', justifyContent: 'center', marginBottom: '20px'}}>
                <img style={styles.pics} src={phattjazz} />
            </Row>
        </div>
        )
    }
}

const styles = {
    title: {
        backgroundColor: '#170229',
        fontSize: '72px',
        fontFamily: 'Inherit',
        justifyContent: 'center'
    },
    pics: {
        width: '65%',
    }
}