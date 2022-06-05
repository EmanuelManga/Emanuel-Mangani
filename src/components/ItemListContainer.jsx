import React from 'react'
import ItemCount from './ItemCount'


export default function ItemListContainer() {

    // const [productos, setProductos] = useState ([
    //     {nombre: 'Latte Machiato',id: 1 , stock: 15},
    //     {nombre: 'Latte Machiato Vanilla',id: 2 , stock: 10},
    //     {nombre: 'Latte Machiato Caramel',id: 3 , stock: 20},
    //     {nombre: 'Cafe Mocha',id: 4 , stock: 8}
    // ]);

    const onAdd = (count) => {
        alert(`sumaste ${count} al carrito`)
    }

    return (
        <div>
            <ItemCount cantInicial={1} stock={15} onAdd={onAdd}> </ItemCount>
        </div>
    )
}
