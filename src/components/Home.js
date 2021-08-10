import React, {Component} from 'react'
import {Row, Column} from 'simple-flexbox'
import YoutubeEmbed from './YoutubeEmbed.js'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import justlogo from '../images/justlogo.png'
import one from '../images/Gallery/one.jpg'
import two from '../images/Gallery/two.jpg'
import three from '../images/Gallery/three.jpg'
import four from '../images/Gallery/four.jpg'
import five from '../images/Gallery/five.jpg'
import six from '../images/Gallery/six.jpg'
import seven from '../images/Gallery/seven.jpg'
import eight from '../images/Gallery/eight.jpg'
import nine from '../images/Gallery/nine.jpg'
import ten from '../images/Gallery/ten.jpg'
import eleven from '../images/Gallery/eleven.jpg'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div style={styles.main}> 
                <YoutubeEmbed style={styles.youtube} embedId="FsHV2eSn8iI" /> 
                <Row style={styles.center}>
                    <Image src={justlogo} />
                </Row>
                <Row style={{justifyContent: 'center'}}>
                    <Carousel fade style={styles.carousel}>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={one}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={two}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={three}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={four}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={five}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={six}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={seven}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={eight}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={nine}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={ten}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block w-100"
                            src={eleven}
                            alt=""
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </div>
        )
    }
}

const styles = {
    main: {
        backgroundColor:'#10011d', 
    },
    youtube: {
        height: '800px'
    },
    center: {
        justifyContent: 'center'
    },
    carousel: {
        width: '85%'
    }
}