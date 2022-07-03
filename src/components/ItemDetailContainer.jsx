import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useLocation, useParams} from 'react-router-dom';
import Item from './Item';
import {getDocs, collection, getFirestore} from 'firebase/firestore';

export default function ItemDetailContainer() {
    
        const{id} = useParams();


        const [loading,setLoading]= useState(true);
        const [error,setError]= useState(false);
        const [itemDet,setItemDet]= useState([]);

    const handelerStock = (id,contItem) => {
        itemDet.stock = itemDet.stock - contItem;
        setItemDet(itemDet)
    }

    const collecion = 'libros';
    const db = getFirestore();
    const collecionDeProductos = collection(db,collecion)

    useEffect(()=>{
        getDocs(collecionDeProductos)
        .then((snapshot)=>{
            const filtered = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})).find(item=>item.id === id)
            setItemDet(filtered);
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id])


    // useEffect(()=>{
    //     fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(user){
    //             const filtered = user.find(item=>item.id === id)
    //             setItemDet(filtered)
    //             // console.log("awdawd",filtered);

    //     })
    //     .catch((error)=>{
    //         setError(error);
    //     })
    // },[id]);

    // console.log("itemdet",itemDet);

    return (
        <>
        <ItemDetail itemDet={itemDet} handelerStock={handelerStock} error={error} loading={loading}></ItemDetail>
        </>
    )
}

