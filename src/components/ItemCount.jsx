import React, { useState } from 'react'
import {Button,Card,Col} from "react-bootstrap";


export default function ItemCount({item,cantInicial,onAdd,handelerStock}) {

    const [contItem,setContItem] = useState(cantInicial)




    const sumar = (stock) =>{
        if(contItem < stock)
            setContItem(contItem+1);
        else
            alert("Alcansaste Stock maximo")
    }

    const restar = () =>{
        if(contItem >cantInicial)
        setContItem(contItem-1);
    }

    const reset = () =>{
        setContItem(cantInicial)
    }

    const agregarCarrito = (stock,id)=>{
        if(stock>=contItem){
            onAdd(contItem);
            handelerStock(id,contItem)
            // setContCarrito(contCarrito - contItem)
            reset();
        }
        else{
            alert("No hay suficiente Stock")
        }
        
    }


    return (
        <>
        <Col  md="auto">
        {/* <Button onClick={log(item.stock)}></Button> */}
            <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Text>${item.precio}</Card.Text>
                    <Card.Text>Stock: {item.stock}</Card.Text>
                    <Card.Text>{contItem}</Card.Text>
                    <Button variant="primary" className='me-2 buttonSub'onClick ={restar}> - </Button>
                    <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>sumar(item.stock)}> + </Button>
                    <br />
                    {/* <Button variant="primary" onClick={()=> {;reset()}}>Agregar al carrito</Button> */}
                    <Button variant="primary" onClick={()=>agregarCarrito(item.stock,item.id)}>Agregar al carrito </Button>
                </Card.Body>
            </Card> 
        </Col>
        </>
    )
}