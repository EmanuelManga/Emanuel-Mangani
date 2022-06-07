import React from 'react'
import ItemCount from './ItemCount';


export default function Item({item,cantInicial,onAdd}) {

    
    return (
        <>
        <ItemCount item={item} cantInicial={cantInicial} onAdd={onAdd}></ItemCount>
        </>
    )
}
