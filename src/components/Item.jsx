import React from 'react'
import ItemCount from './ItemCount';


export default function Item({item,cantInicial,onAdd,handelerStock}) {

    
    return (
        <>
        <ItemCount item={item} cantInicial={cantInicial} onAdd={onAdd} handelerStock={handelerStock}></ItemCount>
        </>
    )
}
