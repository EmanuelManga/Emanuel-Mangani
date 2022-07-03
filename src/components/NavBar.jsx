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
            <Navbar bg="dark" variant={"dark"} expand="lg" >
                <Container fluid>
                {/* <Navbar.Link href="/home">Emanuel</Navbar.Link> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                    >
                    <Nav.Link as={Link} to={"/home"}>Emanuel</Nav.Link>
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/Cart"}>Cart</Nav.Link>
                    {/* <Nav.Link as={Link} to={"/nosotros"}>Nosotros</Nav.Link>
                    <Nav.Link as={Link} to={"/sucursales"}>Sucursales</Nav.Link> */}
                    {/* <Nav.Link as={Link} to={"/Category/Epopeya"}>Epopeya</Nav.Link>
                    <Nav.Link as={Link} to={"/Category/Fantasia"}>Fantasia</Nav.Link> */}
                    {navLink.map((element,index)=>{
                        return<Nav.Link as={Link} to={`/Category/${element}`} key={index} >{element}</Nav.Link>
                    })}

                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-3 barraBusqueda"
                        aria-label="Search"
                    />
                    <Button variant="success" className="me-3">Buscar</Button>
                    <Link to={"/Cart"} >
                        <CartWidget ></CartWidget>
                    </Link>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    )
}



{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
<Link to={"/Category/Fantasia"}>
    <NavDropdown.Item >Fantasia</NavDropdown.Item>
</Link>
<Link to={"/ItemDetailConteiner/1"}>
    <NavDropdown.Item href="#action4">  wada  </NavDropdown.Item>
</Link>
</NavDropdown> */}