import React from 'react'
import { Button, InputGroup } from "react-bootstrap";
import { BsCart } from 'react-icons/bs';
import { MiContexto } from '../context/CartContext';
import {useContext} from 'react';


export default function CartWidget() {

    const {productosTotal} = useContext(MiContexto)



    return (
        <InputGroup className='botonCarrito'>
                <Button variant="outline-secondary">
                <BsCart className='me-2'></BsCart>
                {productosTotal}
                </Button>
            </InputGroup>
    )
}


