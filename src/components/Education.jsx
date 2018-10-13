import React,{Component} from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './Education.css'

export default class Education extends Component{
    render(){
        return(
            <div className="Education">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 align="center">Education</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col xs={6} md={4} xsOffset={1}>
                        <h5><b>Narula Institute of Technology (2013-2017)</b></h5>
                        <b> 8.45/10 CGPA</b>
                        <br />
                        </Col>
                        <Col xs={12} md={6}>
                        <h5><b>B.Tech in INFORMATION TECHNOLOGY</b></h5>
                <i>Apart from my subject knowledge and coding skills most important thing I learned here is Teamwork.
                I learned working efficiently in a team and how to recognize peoples's strength.</i>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        
                        <Col xs={6} md={4} xsOffset={1}>
                        <h5><b>Delhi Public School,Dhanbad (2012-2013)</b></h5>
               <b> Passed with 76.80%</b>
                <br />
                        </Col>
                        <Col xs={12} md={6}>
                        <h5><b>CBSE (XIIth Standard)</b></h5>
                <i>I learned how to stay and solve a difficult situation and not to give up beacause of things get difficult only because of the guidance of my teachers.
                       </i>
                
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        
                        <Col xs={6} md={4} xsOffset={1}>
                        <h5><b>JLNM Senior Secondary School,Dhanbad (2009-2010)</b></h5>
               <b> 8.4/10 CGPA</b>
                <br />
                        </Col>
                        <Col xs={12} md={6}>
                        <h5><b>CBSE (Xth Standard)</b></h5>
                <i>It was my first school and here I learned every small but important lessons of life.
                      I learned how I fit into the world socially.And the most important thing I learned here is Dicsipline.
                        </i>
                        </Col>
                    </Row>
                    <hr />
                </Grid>
    
            </div>
        )
    }
}



