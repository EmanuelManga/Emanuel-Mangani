import React, { useEffect } from 'react'
import { BsTrash } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';
import { Row, Button, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function Cart() {

const {productosTotal,sumaProductos,carritoVacio,carrito,clear,removeItem,sumarCarrito,setCarrito,costoTotal,sumaTotal,restarCarrito} = useContext(MiContexto)

    console.log("carrito",carrito.lenght)


    const subTotal = (item)=>{
        return item.precio * item.cantidad
    }


    if(carritoVacio)
    return(
        <>
        <div >
            <div style={{backgroundColor:"lightblue",width:"80%",height:"15rem", margin:"auto", display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column"}}>
                <h2 style={{textAlign:"center"}}>Todavia no agregaste ningun producto al carrito</h2>
                <Link to={"/Home"} >
                    <Button variant="primary" > Empezar a comprar </Button>
                </Link>
            </div>
        </div>
        
        </>
    );

    return (
        <>
        

        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>


        <Row className='flexColumn'>
        {carrito &&
        carrito.map((item) => (
                <Card className='contenedorCarrito'>
                    <div  style={{display:"flex"}}>
                    <Card.Img variant="top" style={{ width: '6rem' , margin: 'auto auto', padding:'0.5rem'}} src={item.img} />
                    <Card.Body className='cardBodyCarrito' style={{width:'30%'}} >
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text>{item.cantidad} X ${item.precio}</Card.Text>
                    </Card.Body>
                    </div>
                    <Card.Body style={{display: 'flex', flexDirection: 'row',alignItems:'baseline',flexWrap:'nowrap',alignContent:'space-between',justifyContent:'space-between',}}> 
                        <Button  variant="danger" className='me-2 buttonAdd'  onClick ={()=>restarCarrito(item)}> <AiOutlineMinus/> </Button>
                        <Card.Text style={{width:'2.5rem', textAlign:'center'}}>{item.cantidad}</Card.Text>
                        <Button  variant="primary" className='me-2 buttonAdd'  onClick ={()=>sumarCarrito(item)}> <IoMdAdd/> </Button>
                        <Button  variant="warning" className='me-2 buttonAdd'  onClick ={()=>removeItem(item.id)}> <BsTrash/> </Button>
                    </Card.Body>
                    <Card.Body>
                        {/* <Card.Text >Subtotal: ${item.precio*item.cantidad}</Card.Text> */}
                        <Card.Text >Subtotal: ${subTotal(item)}</Card.Text>
                        
                    </Card.Body>
                </Card> 
            ))}
            
        </Row>
        <h2>Total: ${costoTotal}</h2>
        {sumaTotal()}

        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"space-around",justifyContent:"space-between",alignItems:"center"}}>
        <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>clear()}> Limpiar Carrito</Button>
        <Link to={"/Checkout"} >
            <Button   variant="primary" className='me-2 buttonAdd'  > Terminar la compra</Button>
        </Link>
        </div>
        
        </div>
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 5000,
                style: {
                background: '#363636',
                color: '#fff',
                }}}
        />

        </>
    )
}

