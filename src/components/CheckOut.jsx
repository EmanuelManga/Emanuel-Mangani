import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import CheckOutCart from './CheckOutCart';
import CheckOutForm from './CheckOutForm';



export default function CheckOut() {


    const [ordenId,setOrdenId] = useState('')
    const [orden,setOrden] = useState([])
    


            
    console.log("nombre",orden)

    return (
        <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            maxWidth: '950px',
            margin: 'auto',
            marginTop: '40px',}}>
            
            <div style={{
                backgroundColor:'rgba(233, 150, 122, 0.452)',
                width: '100%',
                borderRadius: '20px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                alignItems: 'center',
                textAlign: 'center',}}>

        

        {ordenId ? 
        (
            <>
            <h2>Compra Finalizada</h2>
            <Alert variant="success" style={{marginBottom: '20px', borderRadius: '20px' }}>
                <Alert.Heading>{orden.name}</Alert.Heading>
                <p>
                    Su numero de pedido es: 
                </p>
                <Alert.Heading>{ordenId}</Alert.Heading>
                <hr />
                <p className="mb-0">
                    En los proximos dias nos comunicaremos con usted
                </p>
            </Alert>
            </>
        ) 
        
        : 
        
        (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>

        <h2>Resumen de compras</h2>

        <CheckOutCart> </CheckOutCart>

        <CheckOutForm setOrdenId={setOrdenId} setOrden={setOrden} ></CheckOutForm>
        
        </div>
        )
        
        }
        
            </div>
        </div>
        </>
    )
}


// const handleKeyPress= (e)=> {
//     let key = e.key;
//     let regex = undefined
//     if( e.target.name === "name"){
//         regex = /[a-zA-Z ]/;
//         // regex = /[0-9]/;
        
//     }
//     if(e.target.name === "phone"){
//         regex = /[\cCBS\r\d\s]/;
//         // regex = /[a-zA-Z]/;
//             // regex = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/                

//     }
//     if(e.target.name === "email"){
//         regex = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             // regex = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/
//     }
//     if( !regex.test(key) ) {
//         e.preventDefault();
        
//     }
//     else {
//             console.log( "You pressed a key: " + key );
        
//         }

// }