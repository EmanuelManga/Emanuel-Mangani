import React, { useState } from 'react'
import {Button,Card,Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';
import { useContext } from 'react';

export default function ItemCount({itemDet,handelerStock}) {

    const {onAdd,cantInicial,addItem} = useContext(MiContexto)
    
    
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
            addItem(itemDet,contItem);
            // setContCarrito(contCarrito - contItem)
            // reset();
        }
        else{
            alert("No hay suficiente Stock")
        }
        
        handelerStock(id,contItem)
        reset()
    }


    return (
        <>
                    <Card.Text>{contItem}</Card.Text>
                    <Card.Text>Stock: {itemDet.stock}</Card.Text>
                    <Button variant="primary" className='me-2 buttonSub'onClick ={restar}> - </Button>
                    <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>sumar(itemDet.stock)}> + </Button>
                    <Button   variant="primary" className='me-2 buttonAdd'  onClick ={()=>addItem(itemDet,contItem)}> * </Button>
                    <br />
                    {/* <Button variant="primary" onClick={()=> {;reset()}}>Agregar al carrito</Button> */}
                    <Link to={"/Cart"} >
                        <Button variant="primary" onClick={()=>agregarCarrito(itemDet.stock,itemDet.id)}>Agregar al carrito </Button>
                    </Link>
        </>
    )
}