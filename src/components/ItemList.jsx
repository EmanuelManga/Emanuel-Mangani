import React from 'react'
import {Row,Col} from "react-bootstrap";
import Item from './Item';

export default function ItemList({cantInicial,error,loading,resultado,onAdd}) {

    const log = (x)=>{
        console.log(x)
    }

    return (
        <>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Hubo un error en el pago'}</div>
        <div>
            <Row>
            {resultado &&
            resultado.map((item) => (
                <Item item={item} cantInicial={cantInicial} onAdd={onAdd} > </Item>
                ))}
            </Row>
        </div>
        </>
    )
}


//   <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                     </Card.Text>
//                     <Card.Text>Stock: {contCarrito}</Card.Text>
//                     <Card.Text>{contItem}</Card.Text>
//                     <Button variant="primary" className='me-2 buttonSub'onClick ={restar}> - </Button>
//                     <Button   variant="primary" className='me-2 buttonAdd'  onClick ={sumar}> + </Button>
//                     <br />
//                     {/* <Button variant="primary" onClick={()=> {;reset()}}>Agregar al carrito</Button> */}
//                     <Button variant="primary" onClick={agregarCarrito}>Agregar al carrito</Button>
//                 </Card.Body>
//             </Card>

{/* <Button variant="primary" className='me-2 buttonSub'onClick ={restar}> - </Button> 
<Button   variant="primary" className='me-2 buttonAdd'  onClick ={sumar(item.stock)}> + </Button> 
<br />
<Button variant="primary" onClick={()=> {;reset()}}>Agregar al carrito</Button> 
<Button variant="primary" onClick={agregarCarrito(item.stock)}>Agregar al carrito</Button>  */}