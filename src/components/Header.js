import React, {Component} from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import Search from '../components/Search';

export default class Header extends Component{
    render(){
        return (
            <Navbar bg={""+this.props.colorTheme.bg} variant={""+this.props.colorTheme.variant} expand="md" style={{ boxShadow: "0px 0px 5px 2px grey" }} fixed="top">
                <Navbar.Brand href="#home" style={headerStyle} className="ml-sm-5">Picogram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form style={{ flex:1 }}>
                        <Search searchPost={this.props.searchPost}/>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Button style={{ width: 40, height: 40, borderRadius: 40, background: '#ccc', marginRight: 10, marginLeft: 10}} onClick={this.props.lightMode}>
                            </Button>
                            Light
                        </Nav.Link>
                        <Nav.Link>
                            <Button style={{ width: 40, height: 40, borderRadius: 40, background: '#13131b',  marginRight: 10, marginLeft: 10}} onClick={this.props.darkMode}>
                            </Button>
                            Dark
                        </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const headerStyle = {
    'fontFamily': 'Montserrat',
    'fontWeight': 'bold',
}

