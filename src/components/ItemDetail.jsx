import React from 'react'
import {Button, Card} from "react-bootstrap";
import {useParams, Link} from 'react-router-dom';
import ItemCount from './ItemCount';


export default function ItemDetail({itemDet,handelerStock}) {



    // console.log(itemDet)
    return (
        <>
        {/* <div style={{display:"flex", flexDirection: 'row', backgroundColor: 'lightblue',top:'50%',left:'50%',marginRight: "-50%"}}> */}
        <div style={{ backgroundColor: 'lightblue',top:'50%',left:'50%',marginRight: "-50%"}}>
        <Card.Img variant="top" style={{ width: '9rem', height: '13rem' }} src= {itemDet.img}  />
        <Card.Body >
            <Card.Title>{itemDet.nombre}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Text>${itemDet.precio}</Card.Text>
            {/* <Card.Text>Stock: {itemDet.stock}</Card.Text> */}
            <ItemCount itemDet={itemDet} handelerStock={handelerStock} ></ItemCount>
        </Card.Body>
        </div>
    </> 
    )
}

