import React, { useState } from 'react'
import {Button,Card,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';

export default function ItemCount({itemDet,handelerStock}) {

    const {onAdd,cantInicial,addItem,sumar,restar,reset} = useContext(MiContexto)
    
    
    const [contItem,setContItem] = useState(cantInicial)

    const agregarCarrito = (stock,id)=>{
        if(stock>=contItem){
            onAdd(contItem);
            addItem(itemDet,contItem);
        }
        else{
            alert("No hay suficiente Stock")
        }
        
        handelerStock(id,contItem)
        setContItem(reset())
    }

    console.log('count')

    return (
        <>
                    <Card.Text>{contItem}</Card.Text>
                    <Card.Text>Stock: {itemDet.stock}</Card.Text>
                    <Button variant="primary" className='me-2 buttonSub'onClick ={()=>setContItem(restar(contItem))}> - </Button>
                    <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>setContItem(sumar(itemDet.stock,contItem))}> + </Button>
                    <br />
                    {/* <Link to={"/Cart"} >
                    <Button variant="primary" onClick={()=>agregarCarrito(itemDet.stock,itemDet.id)}>Agregar al carrito </Button>
                    </Link> */}
                    <Button variant="primary" onClick={()=>agregarCarrito(itemDet.stock,itemDet.id)}>Agregar al carrito </Button>
        </>
    )
}