import React, { useContext, useState } from 'react';
import { Card } from "react-bootstrap";
import { MiContexto } from '../context/CartContext';
import ItemCount from './ItemCount';
import toast, { Toaster } from 'react-hot-toast';

export default function ItemDetail({itemDet,handelerStock,error,loading}) {

    const {cantInicial,carrito,onAdd,addItem} = useContext(MiContexto)
    const [contItem,setContItem] = useState(cantInicial)
    const [sumarValido, setSumarValido] = useState(true)
    const [agregarValido,setAgregarValido] = useState(true)


    const sumar = (item,contItem) =>{
        let stock = item.stock
        const auxId = carrito.findIndex((obj => obj.id === item.id));
        if(auxId>=0){
            if(contItem < stock - carrito[auxId].cantidad ){
                if((stock - carrito[auxId].cantidad) - (contItem+1) == 0){
                    toast.error(`Alcansaste Stock maximo de ${stock} en el carrito `)
                    setSumarValido(false)
                }
                return(contItem+1);
        }
            else if(!contItem){
                setSumarValido(false)
            }
        }
        else if(contItem < stock ){
            if(stock - (contItem+1) === 0){
                toast.error("Alcansaste Stock maximo")
                setSumarValido(false)
            }
            return(contItem+1);
        }
    }

    const restar = (contItem) =>{
        if(contItem >cantInicial){
        setSumarValido(true)
        return(contItem-1);
        }
    }

    const reset = () =>{
        return(cantInicial)
    }



    const agregarCarrito = (item)=>{
        let stock = item.stock
        const auxId = carrito.findIndex((obj => obj.id === item.id));
        console.log(auxId)
        if(auxId>=0){
            if(stock - carrito[auxId].cantidad >=contItem){
                onAdd(contItem);
                addItem(itemDet,contItem);
            }
            else{
                toast.error("No hay suficiente Stock")
                setAgregarValido(false)
            }
        }
        else if(stock >= contItem){
            onAdd(contItem);
            addItem(itemDet,contItem);
        }
        else{
            toast.error("No hay suficiente Stock")
            setAgregarValido(false)
        }
        
        setContItem(reset())
    }


    if(loading){
        return<div>Loading...</div>
    }
    if(error){
        return <div> Hubo un error en la carga del producto</div> 
    }
    return (
        <>
        <div >
        <div className='detalleCont' style={{ backgroundColor: 'lightblue' }}>
            <div className='imgItemDet' style={{display:"flex"}}>
        <Card.Img  style={{padding:"3%"}} src= {itemDet.img}  />
            </div>
        <Card.Body className='descItemDet'  >
            <Card.Title>{itemDet.nombre}</Card.Title>
            <Card.Text>
            {itemDet.descripcion}
            </Card.Text>
            <Card.Text>${itemDet.precio}</Card.Text>
            <ItemCount cantInicial={cantInicial} agregarValido={agregarValido} setContItem={setContItem} contItem={contItem} agregarCarrito={agregarCarrito} reset={reset} restar={restar} sumar={sumar} itemDet={itemDet} handelerStock={handelerStock} sumarValido={sumarValido} ></ItemCount>
        </Card.Body>
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


