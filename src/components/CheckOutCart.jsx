import React from 'react'
import {Row, Button, Card} from 'react-bootstrap';
import {useContext} from 'react';
import {MiContexto} from '../context/CartContext';

export default function CheckOutCart() {

    const {carrito,costoTotal} = useContext(MiContexto)

    return (
    <Row  style={{rowGap:"1rem"}}>
        {carrito &&
        carrito.map((item) => (
                // <Card className='contenedorCarrito' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', borderRadius: '20px', padding: '20px', width: '100%', boxShadow: 'unset' }}>
                <Card className='contenedorCarrito' style={{}} > 
                    <div  style={{display:"flex", width:"70%",flexDirection:"column"}}>
                    <Card.Img variant="top" style={{ width: '6rem' , margin: 'auto auto', padding:'0.5rem'}} src={item.img} />
                    <Card.Body className='cardBodyCarrito' style={{}} >
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>{item.cantidad} X ${item.precio}</Card.Text>
                    </Card.Body>
                    </div>
                    <Card.Body>
                        <Card.Text >Subtotal: ${item.precio*item.cantidad}</Card.Text>
                        {/* <Card.Text >Subtotal: ${subTotal(item)}</Card.Text> */}
                        
                    </Card.Body>
                </Card> 
            ))}

                <Card className='contenedorCarrito'  > 
                    <Card.Body className='cardBodyCarrito' >
                        <Card.Title>Total:</Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text >$ {costoTotal}</Card.Text>
                        
                    </Card.Body>
                </Card> 
        </Row>
    )
}
