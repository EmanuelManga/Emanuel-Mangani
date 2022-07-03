import { useEffect } from 'react';
import {useState, useContext} from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsPersonFill,BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {MiContexto} from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


import {addDoc, collection,getFirestore} from 'firebase/firestore';



export default function CheckOut() {



    const {carrito,productosTotal,sumaProductos,costoTotal,setCarrito,setCarritoVacio} = useContext(MiContexto)
    const [validated, setValidated] = useState(false);
    const [compraTerminada,setCompraTerminda] = useState(false)

    const [invalidForm, setInvalidForm] = useState({
        name: false,
        phone: false,
        email: false,
    })

    const [comprador, setComprador] = useState({
        name: '',
        phone: '',
        email: ''
    });
    
    const navigate = useNavigate();

    const db = getFirestore();
    const colleccionOrdenes = collection(db,'ordenes');

    




    useEffect(() => {
        if (!carrito.length) {
        navigate('/');
        }
    }, []);  

    


        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(validarFormulario())
            if(validarFormulario()){
                const orden = {
                    comprador,carrito,productosTotal,costoTotal
                }
                console.log("orden",orden)
                addDoc(colleccionOrdenes,orden).then(({id})=>{
                    console.log(id)
                })
                setCompraTerminda(true)
                setCarrito([])
                setCarritoVacio(true)
            }

        }
        


            const handleChange = (e) =>{
                var valor = e.target.value
                if(valor)
                setComprador({...comprador,[e.target.name]:valor})
                console.log("comprador",comprador)
                console.log("etargetvalue",e.target.value)
                // setComprador({...comprador,valor})
                }

                
    const handleKeyPress= (e)=> {
        let key = e.key;
        let regex = undefined
        if( e.target.name === "name"){
            regex = /[a-zA-Z ]/;
            
        }
        if(e.target.name === "phone"){
            regex = /[\cCBS\r\d\s]/;             
        }
        if(e.target.name === "email"){
            regex = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        }
        if( !regex.test(key) ) {
            e.preventDefault();
        }
        else {
                console.log( "You pressed a key: " + key );
            }

    }

    const logChange = useEffect(() => {
        console.log('new value of ans ', invalidForm);
    }, [invalidForm]);

    const validarFormulario =()=>{
        setInvalidForm({ name: false, phone: false, email: false });
        let validForm = true
        if(!comprador.name){
            setInvalidForm(invalidForm=>({...invalidForm,name:true}))
            validForm = false
        }
        if(!comprador.phone){
            setInvalidForm(invalidForm=>({...invalidForm,phone:true}))
            validForm = false
        }
        if(!comprador.email ){
            setInvalidForm(invalidForm=>({...invalidForm,email:true}))
            validForm = false
        }
        console.log("validar",invalidForm)
        setValidated(validForm)
        return validForm


    }
            

    return (
        <>
        <div style={{margin:"10px"}}>CheckOut

        <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Label>Nombre y Apellido</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsPersonFill/></InputGroup.Text>
                <Form.Control required type="name"  name="name" onKeyDown={handleKeyPress} onChange={handleChange}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
                <Form.Label>Telefono</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsFillPhoneFill/></InputGroup.Text>
                <Form.Control required type="phone"  name="phone" onKeyDown={handleKeyPress} onChange={handleChange}/>
            </InputGroup>
                <Form.Label>Email</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
                <Form.Control required type="email"  name="email" onKeyDown={handleKeyPress} onChange={handleChange}/>
            </InputGroup>
            <Button type='submite' variant='primary' disabled={compraTerminada? true : false}>Confirmar compra</Button>
        </Form>
        
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