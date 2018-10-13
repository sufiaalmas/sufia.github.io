import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div className="home">
            <Grid>
                <br />
                <Row>
                    <h1 align="center">WELCOME TO MY PORTFOLIO</h1>
                </Row>
            
                
                    <Row>
                    <img src="/assets/image.jpg"
                        alt="image" rounded align="center"
                        className="image2"
                         />
                        </Row>
            
                <Row>
                    <h1 align="center">SUFIA ALMAS</h1>
                    <h2 align="center">DEVELOPER</h2>
                </Row>
                
                   
            </Grid>
            </div>
        )
    }
}