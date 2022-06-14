import React from 'react'
import {Button, Card} from "react-bootstrap";
import {useParams} from 'react-router-dom';

export default function ItemDetail({itemDet}) {



    console.log(itemDet)
    return (
        <>
        <Card.Img variant="top" style={{ width: '9rem', height: '13rem' }} src= {itemDet.img}  />
        <Card.Body>
            <Card.Title>{itemDet.nombre}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Text>${itemDet.precio}</Card.Text>
            <Card.Text>Stock: {itemDet.stock}</Card.Text>
        </Card.Body>
    </> 
    )
}
