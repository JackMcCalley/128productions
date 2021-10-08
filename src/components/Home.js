import React from 'react'
import {Row} from 'simple-flexbox'
import YoutubeEmbed from './YoutubeEmbed.js'
import Image from 'react-bootstrap/Image'
import justlogo from '../images/justlogo.png'
import "../css/youtubeEmbed.css"

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div style={{backgroundColor:'#10011d'}}>
                <div style={{width: "70%", marginLeft: "15%"}}>
                <YoutubeEmbed style={styles.youtube} embedId="FsHV2eSn8iI" /> 
                </div>
                <Row style={styles.center}>
                </Row>
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        backgroundColor:'#10011d',
        justifyContent: 'center',
    },
    youtube: {
        height: 'auto'
    },
    center: {
        justifyContent: 'center'
    },
    carousel: {
        width: '50%'

    }
}