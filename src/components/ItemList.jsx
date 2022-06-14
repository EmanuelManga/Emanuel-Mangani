import React from 'react'
import {Row} from "react-bootstrap";
import Item from './Item';

export default function ItemList({cantInicial,error,loading,resultado,onAdd,handelerStock}) {

    // const log = (x)=>{
    //     console.log(x)
    // }

    console.log('resultado',resultado)


    return (
        <>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Hubo un error en el pago'}</div> 
        <div className='contenedor2'>
            <Row>
            {resultado &&
            resultado.map((item) => (
                <Item item={item} cantInicial={cantInicial} onAdd={onAdd} handelerStock={handelerStock} > </Item>
                ))}
            </Row>
        </div>
        </>
    )
}
