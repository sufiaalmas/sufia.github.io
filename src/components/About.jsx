import React,{Component} from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component{
    render(){
        return(
            <div className="show-grid">
                <Grid>
                    <h1 align="center"><b>About Me</b></h1>
                    <hr />
                    <Row>
                        <Col xs={6} md={4} xsOffset={1}>
                        <Image 
                        src="/assets/pic.png" className="image"
                         rounded />
                         </Col>
                        
                         <Col xs={6} md={4} xsOffset={1} className="About-section">
                         
                         <p><i>I am passionate about making things happen! whether I am Planning a weekend outing or learning a programming language.I always see everything in my life with a positive attitude.I am highly motivated and result driven person.<br />
                            Apart from this I am a very creative type person and I love making creative things.And now I have also started designing and developing user friendly websites by combining my technical skills as well as my creativity.</i>
                        </p> 
                         </Col>

                    </Row>
                </Grid>
                
            </div>
        )
    }
}

