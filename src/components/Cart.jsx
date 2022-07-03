import React, { useEffect } from 'react'
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';
import { Row, Button, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Cart() {

const {productosTotal,sumaProductos,carritoVacio,carrito,clear,removeItem,sumarCarrito,setCarrito,costoTotal,sumaTotal,restarCarrito} = useContext(MiContexto)

    console.log("carrito",carrito.lenght)


    const subTotal = (item)=>{
        return item.precio * item.cantidad
    }


    if(carritoVacio)
    return(
        <>
        <h2>Todavia no agregaste ningun producto al carrito</h2>
        <Link to={"/Home"} >
            <Button variant="primary" > Empezar a comprar </Button>
        </Link>
        </>
    );

    return (
        <>
        

        <div></div>
        <Row className='flexColumn'>
        {carrito &&
        carrito.map((item) => (
                <Card className='contenedorCarrito'>
                    <Card.Img variant="top" style={{ width: '6rem' , margin: 'auto auto', padding:'0.5rem'}} src={item.img} />
                    <Card.Body className='cardBodyCarrito' style={{width:'30%'}} >
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>${item.precio}</Card.Text>
                    </Card.Body>
                    <Card.Body style={{display: 'flex', flexDirection: 'row',alignItems:'baseline',flexWrap:'wrap',alignContent:'space-between',justifyContent:'space-between',width:'15%'}}> 
                        <Button  variant="danger" className='me-2 buttonAdd'  onClick ={()=>restarCarrito(item)}> - </Button>
                        <Card.Text >{item.cantidad}</Card.Text>
                        <Button  variant="primary" className='me-2 buttonAdd'  onClick ={()=>sumarCarrito(item)}> + </Button>
                        <Button  variant="warning" className='me-2 buttonAdd'  onClick ={()=>removeItem(item.id)}> X </Button>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text >Subtotal: ${item.precio*item.cantidad}</Card.Text>
                        <Card.Text >Subtotal: ${subTotal(item)}</Card.Text>
                        
                    </Card.Body>
                </Card> 
            ))}
        </Row>
        <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>clear()}> Limpiar Carrito</Button>
        <p>Total: ${costoTotal}</p>
        {sumaTotal()}
        <Link to={"/Checkout"} >
            <Button   variant="primary" className='me-2 buttonAdd'  > Terminar la compra</Button>
        </Link>
        </>
    )
}

