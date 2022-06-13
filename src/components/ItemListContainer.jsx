import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



export default function ItemListContainer({cantInicial,onAdd}) {

    const{id} = useParams();


    // const [loading,setLoading]= useState(true);
    const [error,setError]= useState(false);
    const [resultado,setResultado]= useState([]);
    const [resultadoAux,setResultadoAux]= useState([]);

    const handelerStock = (id,contItem) => {
        let auxId = resultado.findIndex((obj => obj.id === id));
        resultado[auxId].stock =  resultado[auxId].stock - contItem
        setResultado(resultado)
        // resultado.findIndex(id)
        console.log(resultado.findIndex((obj => obj.id === id)))
        console.log(resultado)
    }

    console.log("id",id)

//     useEffect(()=>{
//             const productos = new Promise ((res,rej)=>{
//                 setTimeout(()=>{
//                     console.log("0")
//                     res([
//                         {nombre: 'Harry Poter y la piedra filosofal',id: 1 , stock: 15, precio: 8000,categoria:"Fantasia", img:"https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg"},
//                         {nombre: 'Harry Poter y la camara de los secretos',id: 2 , stock: 10,precio: 9000,categoria:"Fantasia"},
//                         {nombre: 'Harry Poter y el prisionero de Azkaban',id: 30 , stock: 20,precio: 9500,categoria:"Fantasia"},
//                         {nombre: 'La odisea',id: 4 , stock: 8,precio: 5000,categoria:"Epopeya"}
//                     ]);
//                 }, 0);
//     });

//     productos
//         .then((result)=>{
//             console.log("1")
//             setResultado(result);
//             if(id!=undefined){
//                 console.log("2")
//                 const filteredCategory = resultado.filter((item)=>item.categoria === id)
//                 setResultado(filteredCategory);
//             }
//         })

//         .catch((error)=>{
//             setError(error);
//         })
//         .then(()=>{
//             setLoading(false);
//         })
    
// },[id])

// useEffect(()=>{
//     const filteredCategory = resultado.filter((item)=>item.categoria === id)
//     setResultado(filteredCategory);
//     console.log("categoriF",filteredCategory)
//     console.log("id",id)
// },[id])


    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/EmanuelManga/JsonLibros/lista')
        .then(function(response){
            return response.json();
        })
        .then(function(user){
            setResultadoAux(user)
            setResultado(user)
            if(id!=undefined){
                console.log("2")
                const filteredCategory = resultadoAux.filter((item)=>item.categoria === id)
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
        <ItemList  cantInicial={1} resultado={resultado}  onAdd={onAdd} handelerStock={handelerStock}>  </ItemList>
        </div>
        </>
    )
}


// error={error} loading={loading}
