import React from 'react'
import ItemCount from './ItemCount';
import {Button, Card, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Item({item}) {

    
    return (
        <>
        <Col  md="auto">
        {/* <Button onClick={log(item.stock)}></Button> */}
            <Card style={{ width: '18rem', height: '28rem' }}>
                <Card.Img variant="top" style={{width: '6rem' }} src={item.img} />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text> */}
                    <Card.Text>${item.precio}</Card.Text>
                    <Card.Text>Stock{item.stock}</Card.Text>
                    {/* <ItemCount item={item} cantInicial={cantInicial} onAdd={onAdd} handelerStock={handelerStock}></ItemCount> */}
                    <Link to={'/ItemDetailConteiner/'+item.id} >
                        <Button variant="primary">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card> 
        </Col>
        </>
    )
}
