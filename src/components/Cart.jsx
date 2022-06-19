import React, { useEffect } from 'react'
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';

import { Row, Button, Card, Col} from 'react-bootstrap';


export default function Cart() {

const {carrito,clear,removeItem} = useContext(MiContexto)

    console.log("carrito",carrito)

    

    return (
        <>
        <div>dawdasd</div>
            <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>clear}> Limpiar Carrito</Button>
        <Row>
        {carrito &&
        carrito.map((item) => (
            <Col  md="auto">
                <Card style={{ width: '18rem', height: '28rem' }}>
                    <Card.Img variant="top" style={{ width: '30%', height: '400%' }} src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>${item.precio}</Card.Text>
                        <Card.Text>cantidad{item.cantidad}</Card.Text>
                        <Button   variant="secondaru" className='me-2 buttonAdd'  onClick ={()=>removeItem(item.id)}> X </Button>
                    </Card.Body>
                </Card> 
            </Col>
            ))}


        </Row>
        </>
    )
}


