import React from 'react'
import ItemCount from './ItemCount';
import {Button, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Item({item}) {

    
    return (
        <>
        <Col  md="auto" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Card className='tarjeta' style={{ width: '18rem', height: '28rem' }}>
                <Card.Img variant="top" style={{width: '9rem',height:"50%", margin:"auto",paddingTop:"5%"  }} src={item.img} />
                <Card.Body style={{display:"flex", flexDirection:"column"}}>
                    <Card.Title >{item.nombre}</Card.Title>
                    <Card.Text  style={{margin:"auto"}}>${item.precio}</Card.Text>
                    <Card.Text  style={{margin:"auto"}}>Stock{item.stock}</Card.Text>
                    <Link to={'/ItemDetailConteiner/'+item.id}  style={{margin:"auto"}}>
                        <Button  variant="primary ">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card> 
        </Col>
        </>
    )
}
