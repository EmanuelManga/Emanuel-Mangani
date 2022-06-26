import {  createContext,useState } from 'react'
export const MiContexto = createContext({});



export default function CartContext({children}) {

    let cantInicial= 1


    const [carrito,setCarrito] = useState([])
    const [carritoVacio,setCarritoVacio] = useState(true)
    const [costoTotal,setCostoTotal] = useState(0)
    const [productosTotal,setProductosTotal] = useState(0)

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
            sumaTotal();
        }
        else{
            item.cantidad = item.cantidad + quantity;
            setCarrito(carrito =>[...carrito,item])
            sumaTotal();
        }
        console.log("antes del state",carrito)
        setCarritoVacio(false)
        
    }

    const removeItem = (id) => {
        // let auxId = carrito.findIndex((obj => obj.id === id));
        let auxId = carrito.filter((obj => obj.id !== id));
        setCarrito(auxId)
        sumaTotal();
    }

    const clear = () =>{
        // setCarrito(carrito.splice(0,carrito.length))
        setCarrito([])
        setCarritoVacio(true)
        setCostoTotal(0)
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

    const sumar = (stock,contItem) =>{
        if(contItem < stock)
            // setContItem(contItem+1);
            return(contItem+1);
        else
            alert("Alcansaste Stock maximo")
    }

    const sumarCarrito = (item)=>{
        if( 0 < item.stock){
            let auxId = carrito.findIndex((obj => obj.id === item.id));
            carrito[auxId].cantidad = carrito[auxId].cantidad + 1;
            carrito[auxId].stock = carrito[auxId].stock - 1;
            // return carrito;
            console.log("despues del state 2 ",carrito)
            setCarrito(carrito)
        }
        else{
            alert("Alcansaste Stock maximo")
        }
        sumaTotal();
    }

    const restarCarrito = (item)=>{
        if( 1 < item.cantidad){
            let auxId = carrito.findIndex((obj => obj.id === item.id));
            carrito[auxId].cantidad = carrito[auxId].cantidad - 1;
            carrito[auxId].stock = carrito[auxId].stock + 1;
            // return carrito;
            setCarrito(carrito)
        }
        else{
            alert("error")
        }
        sumaTotal();
    }

    const sumaTotal = ()=>{
        let tot = 0
        carrito.forEach(item=>{
            let sub = 0
            sub = item.precio*item.cantidad;
            tot = tot + sub
            console.log('sum',costoTotal)
        })
        setCostoTotal(tot)
        sumaProductos()
    }


    const sumaProductos = () =>{
        let totProd=0
        carrito.forEach(item=>{
            let sub = 0
            sub = item.cantidad;
            totProd = totProd + sub
            
        })
        setProductosTotal(totProd)
    }
    


    console.log("despues del state",carrito)
    return (
    <MiContexto.Provider value={{productosTotal,carritoVacio,carrito,setCarrito,onAdd,cantInicial,isInCart,addItem,clear,removeItem,sumar,sumarCarrito,sumaTotal,costoTotal,restarCarrito}} >{children}</MiContexto.Provider>
    )
}
