import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import Item from './Item';

export default function ItemDetailContainer() {
    
        const{id} = useParams();


        const [loading,setLoading]= useState(true);
        const [error,setError]= useState(false);
        const [itemDet,setItemDet]= useState([]);


    useEffect(()=>{
        const productoDetalle = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(
                    {nombre: 'Harry Poter y la piedra filosofal',id: 1 , stock: 15, precio: 8000, img:"https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg"},
                );
            }, 2000);
});

productoDetalle
    .then((result)=>{
        setItemDet(result);
        console.log('resultadoDetalle',result)
    })

    .catch((error)=>{
        setError(error);
    })
    .then(()=>{
        setLoading(false);
    })

},[])



    // useEffect(()=>{
    //     fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(user){
    //         setItemDet(user)
    //         // console.log("user",user);
    //         // console.log("itemdet",itemDet);
    //         // console.log("id",id);
    //         //     const filtered = itemDet.filter((cosa)=>cosa.id === id)
    //         //     setItemDet(filtered)
    //         //     console.log("awdawd",filtered);

    //     })
    //     .catch((error)=>{
    //         setError(error);
    //     })
    // },[id]);

    console.log("itemdet",itemDet);

    const filtrar =()=>{
        console.log(id)
                const activeServiceList = itemDet.filter((item) => {
                    return id.includes(item.id);
                });
                console.log("awdawd",activeServiceList);
                setItemDet(activeServiceList)
    }

    return (
        <>
        {/* {itemDet && itemDet.filter((itemDet)=> itemDet.id === getId ( */}
        <ItemDetail itemDet={itemDet} filtrar={filtrar}></ItemDetail>
        {/* * ))} */}
        </>
    )
}


// {itemDet && itemDet.map((itemDet)=> (
//     <ItemDetail itemDet={itemDet}></ItemDetail>
// ))}

// {itemDet && itemDet.filter((item)=>)}
// <ItemDetail itemDet={itemDet}></ItemDetail>

// {resultado &&
//     resultado.map((item) => (
//         <Item item={item} cantInicial={cantInicial} onAdd={onAdd} handelerStock={handelerStock} > </Item>
//         ))}