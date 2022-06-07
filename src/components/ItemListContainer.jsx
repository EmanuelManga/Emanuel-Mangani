import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList';



export default function ItemListContainer({cantInicial,stock,onAdd}) {



    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(false);
    const [resultado,setResultado]= useState([]);



    useEffect(()=>{
            const productos = new Promise ((res,rej)=>{
                setTimeout(()=>{
                    res([
                        {nombre: 'Harry Poter y la piedra filosofal',id: 1 , stock: 15, precio: 8000},
                        {nombre: 'Harry Poter y la camara de los secretos',id: 2 , stock: 10,precio: 9000},
                        {nombre: 'Harry Poter y el prisionero de Azkaban',id: 3 , stock: 20,precio: 9500},
                        {nombre: 'La odisea',id: 4 , stock: 8,precio: 5000}
                    ]);
                }, 2000);
    });

    productos
        .then((result)=>{
            setResultado(result);
        })

        .catch((error)=>{
            setError(error);
        })
        .then(()=>{
            setLoading(false);
        })

},[])


    // console.log(contCarrito)
    
    return (

        <ItemList  cantInicial={1} resultado={resultado} error={error} loading={loading} onAdd={onAdd}> </ItemList>

    )
}



    // const [productos, setProductos] = useState ([
    //     {nombre: 'Harry Poter y la piedra filosofal',id: 1 , stock: 15, precio: 8000},
    //     {nombre: 'Harry Poter y la camara de los secretos',id: 2 , stock: 10,precio: 9000},
    //     {nombre: 'Harry Poter y el prisionero de Azkaban',id: 3 , stock: 20,precio: 9500},
    //     {nombre: 'La odisea',id: 4 , stock: 8,precio: 5000}
    // ]);
