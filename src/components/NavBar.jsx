import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nosotros from "./Nosotros";
import Home from "./Home";
import Sucursales from "./Sucursales";
import CartWidget from "./CartWidget";
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './Cart';


export default function NavBar() {

    const [navLink, setNavLink] = useState([]);

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
        .then(respuesta => respuesta.json())
        .then(parsedArray => parsedArray.map(x => x.categoria))
        .then(uniqueArray => setNavLink([...new Set(uniqueArray)]))
    })


    return (
        <>
            <div>
            
                <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top"  variant={"dark"}  >
                <Container fluid>
                <Navbar.Brand href="#home" as={Link} to={"/home"}>E-Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse   id="responsive-navbar-nav">
                    <Nav
                    className="me-auto  my-2 my-lg-0"
                    navbarScroll
                    >
                    <Nav.Link href="#home" as={Link} to={"/home"}>Home</Nav.Link>
                    {navLink.map((element,index)=>{
                        return<Nav.Link href="#cat" as={Link} to={`/Category/${element}`} key={index} >{element}</Nav.Link>
                    })}
                    </Nav>
                    <Link href="#cart" to={"/Cart"} >
                        <CartWidget ></CartWidget>
                    </Link>
                </Navbar.Collapse>
                </Container>
                </Navbar>  
            
            </div>
        </>
    )
}

{/* <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top"  variant={"dark"}  >
                <Container>
                    <Navbar.Brand href="#home" as={Link} to={"/home"}>E-Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"as={Link} to={"/home"}>Home</Nav.Link>
                        {navLink.map((element,index)=>{
                                    return<Nav.Link href="#pricing" as={Link} to={`/Category/${element}`} key={index} >{element}</Nav.Link>
                                })}
                    </Nav>
                    <Link href="#deets" to={"/Cart"} >
                        <CartWidget ></CartWidget>
                    </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
             */}


/*
<Navbar collapseOnSelect fixed="top" bg="dark" variant={"dark"} expand="lg"  >
<Container fluid>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse   id="navbarScroll">
    <Nav
    className="me-auto my-2 my-lg-0"
    style={{ maxHeight: "100px" }}
    navbarScroll
    >
    <Nav.Link href="#features" as={Link} to={"/home"}>Home</Nav.Link>
    {navLink.map((element,index)=>{
        return<Nav.Link as={Link} to={`/Category/${element}`} key={index} >{element}</Nav.Link>
    })}
    </Nav>
    <Link to={"/Cart"} >
        <CartWidget ></CartWidget>
    </Link>
</Navbar.Collapse>
</Container>
</Navbar>  */