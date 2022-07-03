
import {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getDocs, collection,getFirestore, query, where} from 'firebase/firestore'







export default function ItemListContainer() {
    const{id} = useParams();


    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(false);
    const [resultado,setResultado]= useState([]);

    
    useEffect(()=>{


        const collecion = 'libros';
        const db = getFirestore();
        const collecionDeProductos = collection(db,collecion)

        if(id){
            
        getDocs(collecionDeProductos) 
            .then((snapshot)=>{
                const filteredCategory = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})).filter((item)=>item.categoria === id)
                setResultado(filteredCategory);
                console.log('if',snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
            })

        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }
    else{
        getDocs(collecionDeProductos)
        .then((snapshot)=>{
            setResultado(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
            console.log('else',snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        .catch((error)=>{
            setError(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    },[id])




    // useEffect(()=>{
    //     getDocs(collecionDeProductos).then((res) =>{
    //         setResultado(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
    //         console.log(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
    //     })
    //     .then(function(user){
    //         setResultado(user)
    //         if(id!==undefined){
    //             const filteredCategory = user.filter((item)=>item.categoria === id)
    //             setResultado(filteredCategory);
    //         }
    //     })
    // },[id])



    // useEffect(()=>{
    //     fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(user){
    //         setResultado(user)
    //         if(id!==undefined){
    //             const filteredCategory = user.filter((item)=>item.categoria === id)
    //             setResultado(filteredCategory);
    //         }
    //     })
    //     .catch((error)=>{
    //         setError(error);
    //     })
    // },[id]);



    // console.log(contCarrito)
    
    return (

        <>
        <div className='contenedor'>
        <ItemList resultado={resultado} error={error} loading={loading} >  </ItemList>
        </div>
        </>
    )
}


// resultado={resultado} error={error} loading={loading}
