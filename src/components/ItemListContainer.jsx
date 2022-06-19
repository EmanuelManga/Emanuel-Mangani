import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



export default function ItemListContainer() {

    const{id} = useParams();


    // const [loading,setLoading]= useState(true);
    const [error,setError]= useState(false);
    const [resultado,setResultado]= useState([]);


    // const handelerStock = (id,contItem) => {
    //     let auxId = resultado.findIndex((obj => obj.id === id));
    //     resultado[auxId].stock =  resultado[auxId].stock - contItem
    //     console.log(resultado.findIndex((obj => obj.id === id)))
    //     console.log(resultado)
    //     setResultado(resultado)
    // }

    // console.log("id",id)


    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
        .then(function(response){
            return response.json();
        })
        .then(function(user){
            setResultado(user)
            if(id!==undefined){
                const filteredCategory = user.filter((item)=>item.categoria === id)
                setResultado(filteredCategory);
            }
        })
        .catch((error)=>{
            setError(error);
        })
    },[id]);



    // console.log(contCarrito)
    
    return (

        <>
        <div className='contenedor'>
        <ItemList  resultado={resultado} >  </ItemList>
        </div>
        </>
    )
}


// error={error} loading={loading}
