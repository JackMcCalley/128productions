import React, {Component} from 'react'
import justlogo from '../images/justlogo.png'
import {Row} from 'simple-flexbox'

export default class Footer extends React.Component {
    render(){
        return(
            <div style={{backgroundColor: '#10011d'}}>
            <Row style={{justifyContent: 'center', backgroundColor: '#10011d'}}>
                <img src={justlogo}/>
            </Row>
            </div>
        )
    }
}