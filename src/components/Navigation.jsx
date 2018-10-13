import React,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component{
    render(){
        return(
            <div>
            <Navbar default collapseOnSelect className="nav">
                <Navbar.Header >
                    <Navbar.Brand>
                        <Link to="/">My Portfolio</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className="navElement">
                        <NavItem eventkey={1} componentClass={Link} href="/"to="/">Home</NavItem>
                        <NavItem eventkey={2} componentClass={Link} href="/About"to="/About">About</NavItem>
                        <NavItem eventkey={3} componentClass={Link} href="/Education"to="/Education">Education</NavItem>
                        <NavItem eventkey={4} componentClass={Link} href="/Skills"to="/Skills">Skills</NavItem>
                        <NavItem eventkey={5} componentClass={Link} href="/Projects"to="/Projects">Projects</NavItem>
                        <NavItem eventkey={6} componentClass={Link} href="/Contact"to="/Contact">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
