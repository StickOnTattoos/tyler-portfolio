import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome</h2>
                    <p>This is Tyler's Portfolio Site</p>
                </Jumbotron>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" href="/about">About</Button>
                    <Button bsStyle="primary" bsSize="large" href="/projects">Projects</Button>
                    <Button bsStyle="primary" bsSize="large" href="/contact">Contact</Button>
                </ButtonToolbar>
            </Grid>
        );
    }
}