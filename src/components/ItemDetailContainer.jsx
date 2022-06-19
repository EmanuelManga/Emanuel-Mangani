import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useLocation, useParams} from 'react-router-dom';
import Item from './Item';

export default function ItemDetailContainer() {
    
        const{id} = useParams();


        const [loading,setLoading]= useState(true);
        const [error,setError]= useState(false);
        const [itemDet,setItemDet]= useState([]);

    const handelerStock = (id,contItem) => {
        // let auxId = itemDet.findIndex((obj => obj.id === id));
        // itemDet[auxId].stock =  itemDet[auxId].stock - contItem
        // console.log(itemDet.findIndex((obj => obj.id === id)))
        itemDet.stock = itemDet.stock - contItem;
        // console.log("handelerStock itemdetcont",itemDet)
        setItemDet(itemDet)
    }


    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
        .then(function(response){
            return response.json();
        })
        .then(function(user){
                const filtered = user.find(item=>item.id === id)
                setItemDet(filtered)
                // console.log("awdawd",filtered);

        })
        .catch((error)=>{
            setError(error);
        })
    },[id]);

    // console.log("itemdet",itemDet);

    return (
        <>
        {/* {itemDet && itemDet.filter((itemDet)=> itemDet.id === getId ( */}
        <ItemDetail itemDet={itemDet} handelerStock={handelerStock}></ItemDetail>
        {/* * ))} */}
        </>
    )
}

