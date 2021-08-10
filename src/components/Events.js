import React from 'react';
import {Row, Col} from 'simple-flexbox'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import eight from '../images/Gallery/eight.jpg'

export default class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Best event ever!",
            cardText: "Watch the coolest DJ's perform the dopest songs",
            date: "1/1/21",
            loc: "Location"
        }
    }

    render(){
        return(
            <div style={styles.body}>
                <Row style={styles.main}>
                    <span style={styles.title}>EVENTS</span>
                </Row>
                <Row style={{marginLeft: '20px', justifyContent: 'space-around'}}>
                    <Card>
                        <Card.Img style={styles.image} variant="top" src={eight} />
                        <Card.Body>
                            <Card.Title style={{fontSize: "36px"}} >{this.state.title}</Card.Title>
                            <Card.Text>{this.state.cardText}</Card.Text>
                            <Card.Text>{this.state.date}</Card.Text>
                            <Card.Text>{this.state.loc}</Card.Text>
                        </Card.Body>
                        <Button style={styles.button} bg="outline-light" variant="outline-light">TICKETS</Button>
                    </Card>
                    <Card>
                        <Card.Img style={styles.image} variant="top" src={eight} />
                        <Card.Body>
                            <Card.Title style={{fontSize: "36px"}}>{this.state.title}</Card.Title>
                            <Card.Text>{this.state.cardText}</Card.Text>
                            <Card.Text>{this.state.date}</Card.Text>
                            <Card.Text>{this.state.loc}</Card.Text>
                        </Card.Body>
                        <Button style={styles.button} bg="outline-light" variant="outline-light">TICKETS</Button>
                    </Card>
                    <Card style={{marginRight: '20px', justifyContent: 'center'}}>
                        <Card.Img style={styles.image} variant="top" src={eight} />
                        <Card.Body>
                            <Card.Title style={{fontSize: "36px"}}>{this.state.title}</Card.Title>
                            <Card.Text>{this.state.cardText}</Card.Text>
                            <Card.Text>{this.state.date}</Card.Text>
                            <Card.Text>{this.state.loc}</Card.Text>
                        </Card.Body>
                        <Button style={styles.button} bg="outline-light" variant="outline-light">TICKETS</Button>
                    </Card>
                </Row>
            </div>
        )
    }
}

const styles = {
    main: {
        fontSize: '72px',
        marginLeft: '20px',
        marginBottom: '20px',
        color: '#fff'
    },
    image: {
        width: '450px'
    },
    body: {
        height: '100vh',
        backgroundColor: '#10011d'
    },
    title: {
        borderBottom: '5px solid #44d9e8',
        paddingRight: '75px'
    },
    button: {
        width: '50%',
        marginLeft: '25%'
    }
}