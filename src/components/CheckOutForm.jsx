import React from 'react'
import {Button, Form, InputGroup} from 'react-bootstrap';
import {BsPersonFill, BsFillPhoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {useEffect, useState, useContext} from 'react';
import {MiContexto} from '../context/CartContext';
import {addDoc, collection, getFirestore,doc,updateDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import Item from './Item';

export default function CheckOutForm({setOrdenId,setOrden}) {



    const {carrito,productosTotal,costoTotal,setCarrito,setCarritoVacio} = useContext(MiContexto)
    const [validated, setValidated] = useState(false);
    const [compraTerminada,setCompraTerminda] = useState(false)
    const [phoneValid,setPhoneValid]= useState(true)
    const [nameValid,setNameValid]= useState(true)
    const [emailValid,setEmailValid]= useState(true)


    


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

    



    const handleChange = (e) =>{
        var valor = e.target.value
        if(valor)
        setComprador({...comprador,[e.target.name]:valor})
        console.log("comprador",comprador)
        console.log("etargetvalue",e.target.value)
        }

        const handleKeyPress= (e)=> {
            let key = e.key;
            let regex = undefined
            if( e.target.name === "name"){
                regex = /[a-zA-Z ]/;
            }
            if(e.target.name === "phone"){
                regex = /[\cCBS\r\d\s]/;    
                console.log("lengt",comprador.phone.length)         
                // regex =  !/^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;             
            }
            if(e.target.name === "email"){
                regex = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            }
            if( !regex.test(key) ) {
                e.preventDefault();
            }
            
    
        }


        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(validarFormulario())
            if(validarFormulario()){
                const orden = {
                    comprador,carrito,productosTotal,costoTotal
                }
                setOrden(comprador,carrito,productosTotal,costoTotal)
                console.log("orden",orden)
                addDoc(colleccionOrdenes,orden).then(({id})=>{
                    console.log(id)
                    setOrdenId(id)
                })
                setCompraTerminda(true)
                updateStock()
                setCarrito([])
                setCarritoVacio(true)
            }

        }
        

    const validarFormulario =()=>{
        setInvalidForm({ name: false, phone: false, email: false });
        setPhoneValid(true)
        setEmailValid(true)
        setNameValid(true)
        let validForm = true
        if(!comprador.name){
            setInvalidForm(invalidForm=>({...invalidForm,name:true}))
            validForm = false
            setNameValid(false)
        }
        if(!comprador.phone){
            setInvalidForm(invalidForm=>({...invalidForm,phone:true}))
            validForm = false
            setPhoneValid(false)
        }
        if(comprador.phone.length < 7 && comprador.phone.length > 10 ){
            setInvalidForm(invalidForm=>({...invalidForm,phone:true}))
            validForm = false
            setPhoneValid(false)
        }
        if(!comprador.email ){
            setInvalidForm(invalidForm=>({...invalidForm,email:true}))
            validForm = false
            setEmailValid(false)
        }
        console.log("validar",invalidForm)
        setValidated(validForm)
        return validForm

    }

    const updateStock = ()=>{
        carrito.forEach((item)=>{
            console.log("foreach",item.id)
            let auxStock = item.stock-item.cantidad;
            const newStock = doc(db,"libros",item.id);
            updateDoc(newStock,{stock:auxStock});
        })
    }


    return (
        <>
        <div style={{margin:"10px"}}>
        <h4>Datos de facturación</h4>
        <hr />

        <Form validated={validated} onSubmit={handleSubmit}>
                <Form.Label>Nombre y Apellido</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsPersonFill/></InputGroup.Text>
                <Form.Control isInvalid={nameValid ? false : true} type="name"  name="name" onKeyDown={handleKeyPress} onChange={handleChange}/>
                <Form.Control.Feedback type="invalid">Ingrese un nombre</Form.Control.Feedback>
            </InputGroup>
                <Form.Label>Telefono</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><BsFillPhoneFill/></InputGroup.Text>
                <Form.Control  isInvalid={phoneValid ? false : true} type="phone"  name="phone" onKeyDown={handleKeyPress} onChange={handleChange}/>
                <Form.Control.Feedback type="invalid">
                    Ingresar numero de telefono valido
                </Form.Control.Feedback>
            </InputGroup>
                <Form.Label>Email</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
                <Form.Control isInvalid={emailValid ? false : true} type="email"  name="email" onKeyDown={handleKeyPress} onChange={handleChange}/>
                <Form.Control.Feedback type="invalid">Ingrese un email valido</Form.Control.Feedback>
            </InputGroup>
            <Button type='submite' variant='primary' disabled={compraTerminada ? true : false}>Confirmar compra</Button>
        </Form>        
        
        </div>

        </>
    )
}
