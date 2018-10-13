import React,{Component} from 'react';
import {Grid,Row,Col,Image} from 'react-bootstrap';
import './Projects.css';

export default class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 align="center">Projects</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col xs={6} md={3} xsOffset={1}>
                        <h5><b>Duration : </b></h5>
                July-Aug 2016 (1 month)
                <br /><br />
               <p><b> Technologies Used:</b></p>
               HTML5,MySQL,Javascript,PHP
                <br />
                        </Col>
                        <Col xs={12} md={7}>
                        <h5><b>RAILWAY EMPLOYEE BIODATA SUB MODULE </b></h5> 
                <b><i>Description :</i></b>
                <i>According to this project , the railway employees details will be stored with all details to the database of authentic railway websites in an official manner.</i>
                <i>The admins of the database can store the details of all the employees and the details can be edited later with the correct information and as well as it can 
                    be viewed by the office administrator for any kind of purpose.
                </i>
                <br /><br />
                <b>Persons: 4 </b>
                        </Col>
                    </Row>
                    <hr />
            </Grid>
            </div>
        )
    }
}

