import React from 'react'
import { Button, InputGroup } from "react-bootstrap";
import { BsCart } from 'react-icons/bs';


export default function CartWidget({cuantosProd}) {
    return (
        <InputGroup className='botonCarrito'>
                <Button variant="outline-secondary">
                <BsCart className='me-2'></BsCart>
                {cuantosProd}
                </Button>
            </InputGroup>
    )
}


