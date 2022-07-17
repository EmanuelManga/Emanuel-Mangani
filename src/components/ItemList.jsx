import React from 'react'
import {Row} from "react-bootstrap";
import Item from './Item';

export default function ItemList({error,loading,resultado}) {

    // const log = (x)=>{
    //     console.log(x)
    // }

    // console.log('resultado',resultado)

    if(loading){
        return<div>Loading...</div>
    }
    // console.log(itemDet)
    if(error){
        return <div> Hubo un error en la carga de productos</div> 
    }


    return (
        <>
        <div className='contenedor2'>
            <Row className='row1'>
            {resultado &&
            resultado.map((item) => (
                <Item item={item}  > </Item>
                ))}
            </Row>
        </div>
        </>
    )
}
