import React,{Component} from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                 <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 align="center">Contact</h1>
                            <hr />
                            <h3 align="center">You can reach out to me in one of the following ways...</h3>
                            <hr />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                    
                    <Col xs={6} xsOffset={2} md={4}>
                    <img 
                    src="https://image.shutterstock.com/image-photo/white-cup-hot-black-coffee-450w-498320740.jpg"
                    alt="image"
                    className="image1"/>
                    </Col>
                    <Col xsHidden md={4}>
                    <div>
                    <h4>  sufiaalmas4@gmail.com</h4><br />
                    <h4> <i> (+91) 8961453188 </i></h4><br />
                    <h4>  https://www.linkedin.com/in/sufia-almas-85430b114</h4><br />
                </div>
                    </Col>
                </Row>
                <br />
                <hr />
                <h4 align="center">Like My Profile ....Hire me</h4>
                <hr />
                
              </Grid>
            </div>
        )
    }
}

