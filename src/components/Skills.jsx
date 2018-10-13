import React,{Component} from 'react';
import {ProgressBar,Grid,Col,Row} from 'react-bootstrap';
import './Skills.css';

export default class Skills extends Component{
    render(){
        return(
            <div className="skills">
                <Grid>
                    <h2 align="center">Skills</h2>
                    <hr />
                    <Row>
                        <Col xs={6} md={6} xsOffset={1}>
                        <h2>Technical</h2><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2} xsOffset={2} >
                        <p>C</p>
                        </Col>
                        <Col xs={6} md={4}  >
                           <ProgressBar striped bsStyle="success" now={80}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2} xsOffset={2} >
                        <p>Core Java</p>
                        </Col>
                        <Col xs={6} md={4} >
                           <ProgressBar striped bsStyle="success" now={60}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2} xsOffset={2} >
                    <p>Javascript</p>
                        </Col>
                        <Col xs={6} md={4} >
                           <ProgressBar striped bsStyle="success" now={70}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2} xsOffset={2} >
                    <p>MySQL</p>
                        </Col>
                        <Col xs={6} md={4} >
                           <ProgressBar striped bsStyle="success" now={75}/>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={6} md={6} xsOffset={1}>
                        <h2>Strengths</h2><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6} xsOffset={2} >
                    <ul>
                        <li>Quick learner with good grasping ability.</li>
                        <li>Great Time Management skills.</li>
                        <li>I possess high tolerance of stress and enjoy responsibilities.</li>
                        <li>Lead and work in a team in an organized way.</li>
                    </ul>
                    </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}