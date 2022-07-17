import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

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




    return (
        <>
        <ItemDetail itemDet={itemDet} handelerStock={handelerStock} error={error} loading={loading} ></ItemDetail>
        </>
    )
}

