import React from 'react';
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function ItemCount({cantInicial,agregarValido,setContItem,itemDet,handelerStock,reset,restar,sumar,sumarValido,contItem,agregarCarrito}) {

    
    console.log('count')
    console.log("sumarValido",sumarValido)
    console.log("contItem",contItem)

    return (
        <>
                    <Card.Text>Stock: {itemDet.stock}</Card.Text>
        <div className='itemContCont' style={{display:"flex",flexDirection:"column",}}>
                    <div style={{display:"flex", margin:"auto",alignItems:"baseline"}}>
                    <Button variant="danger" className='me-2 buttonSub' disabled={contItem <= 1 || !contItem? true : false} onClick ={()=>setContItem(restar(contItem))}> - </Button>
                    <Card.Text>{contItem ? contItem : cantInicial }</Card.Text>
                    <Button   variant="primary" className='me-2 buttonAdd' disabled={sumarValido ? false : true} onClick ={()=>setContItem(sumar(itemDet,contItem))}> + </Button>
                    </div>
                    <br />
                    <div style={{display:"flex", margin:"auto",alignItems:"baseline",columnGap:"5%" }}>
                    <Button style={{margin:"auto"}} variant="primary" disabled={agregarValido ? false : true} onClick={()=>agregarCarrito(itemDet)}>Agregar al carrito </Button>
                    <Link to={"/Cart"} >
                        <Button style={{margin:"auto"}} variant="primary"  >Ir al carrito </Button>
                    </Link>
                    </div>
        </div>
        </>
    )
}