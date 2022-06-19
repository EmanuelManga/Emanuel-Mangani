import {  createContext,useState } from 'react'
export const MiContexto = createContext({});



export default function CartContext({children}) {

    let cantInicial= 1


    const [carrito,setCarrito] = useState([])

    const onAdd = (count) => {
        alert(`sumaste ${count} al carrito`)
    }
    
    const addItem = (item, quantity)=>{
        if (isInCart(item)===true){
            // item = carrito.find(obj => obj.id === item.id)
            // item.cantidad=item.cantidad+quantity;
            let auxId = carrito.findIndex((obj => obj.id === item.id));
            carrito[auxId].cantidad = carrito[auxId].cantidad + quantity;
            setCarrito(carrito);
        }
        else{
            item.cantidad = item.cantidad + quantity;
            setCarrito(carrito =>[...carrito,item])
        }
        
        console.log("antes del state",carrito)
    }

    const removeItem = (id) => {
        // let auxId = carrito.findIndex((obj => obj.id === id));
        let auxId = carrito.filter((obj => obj.id !== id));
        setCarrito(auxId)
    }

    const clear = () =>{
        // setCarrito(carrito.splice(0,carrito.length))
        setCarrito([])
    }

    const isInCart = (item) =>{
        const buscar = carrito.find(obj=>obj.id===item.id)
        console.log("isincart",buscar)
        if (buscar === undefined){
            return false
        }
        else {
            return true
        }
    }


    console.log("despues del state",carrito)
    return (
    <MiContexto.Provider value={{carrito,setCarrito,onAdd,cantInicial,isInCart,addItem,clear,removeItem}} >{children}</MiContexto.Provider>
    )
}
