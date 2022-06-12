import React, {useState ,useEffect } from 'react'

export default function TestApi() {

    const [libros,setLibros]= useState([]);


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', undefined)
        .then((response)=>  response.json())
        .then((data)=>{
            setLibros(data)
            console.log(data);
            
            
        })
        .catch((e)=>{
            console.log('Algo salio mal',e);
        })
        .finally(()=>{
            console.log('fin')
        })
    },[])

    console.log('libros',libros);

    return (
        <>
        {/* {libros && libros.map((item) => (
                <div>{item.title}</div>
                ))} */}
        <div></div>
        </>
    )
}
