import React from 'react'
import {Row, Col} from 'simple-flexbox'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
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

export default class Gallery extends React.Component {
    render(){
        return(
            <div>
                <Row style={styles.title}>
                    <span style={styles.titletext}>PHOTOS</span>
                </Row>
                <Row style={{justifyContent: 'center', backgroundColor: '#10011d'}}>
                    <Carousel fade style={styles.carousel}>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={one}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={two}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={three}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={four}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={five}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={six}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={seven}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={eight}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={nine}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className="d-block w-100"
                            src={ten}
                            alt=""
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
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
    title:{
        fontSize: '72px',
        paddingLeft: '20px',
        backgroundColor: '#10011d',
        color: "white",
    },
    titletext:{
        borderBottom: '5px solid #44d9e8',
        paddingRight: '75px',
        marginBottom: '20px'
    },
    youtube: {
        height: '800px'
    },
    center: {
        justifyContent: 'center'
    },
    carousel: {
        width: '70%'
    }
}