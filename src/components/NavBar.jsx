import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Container,} from "react-bootstrap";
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import Nosotros from "./Nosotros";
import Home from "./Home";
import Sucursales from "./Sucursales";
import CartWidget from "./CartWidget";


export default function NavBar() {
    return (
        <Router> 
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">Emanuel</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                    <Nav.Link as={Link} to={"/sucursales"}>Sucursales</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">    
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-3 barraBusqueda"
                        aria-label="Search"
                    />
                    <Button variant="success" className="me-3">Buscar</Button>
                    <CartWidget cuantosProd={4} ></CartWidget>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>
                    <Route path="/sucursales">
                        <Sucursales />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>  
    )
}
