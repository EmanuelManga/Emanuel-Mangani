
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";
import Sucursales from "./components/Sucursales";
import CartContext from "./context/CartContext";


function App() {
  
  
  
  initializeApp({
    apiKey: "AIzaSyBiDqkL4KOjGTuCyda2FTv5f9j_liszMUo",
    authDomain: "librosecomers.firebaseapp.com",
    projectId: "librosecomers",
    storageBucket: "librosecomers.appspot.com",
    messagingSenderId: "693794814407",
    appId: "1:693794814407:web:b2e5e896108aa5faf7c1e2"
  });


  return (
    <>
    <CartContext>

    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/home" element={<ItemListContainer  />}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/sucursales" element={<Sucursales/>}/>
      <Route path="/ItemDetailConteiner/:id" element={<ItemDetailContainer  />}/>
      <Route path="/Category/:id" element={<ItemListContainer   />}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/CheckOut" element={<CheckOut/>}/>
    </Routes>
    </BrowserRouter>
    </CartContext>
    </>
  )
}

export default App;



{/* <div>
      <NavBar />
      <ItemDetailContainer/>
      <TestApi></TestApi>
      <ItemListContainer cantInicial={1} onAdd={onAdd}></ItemListContainer>
      </div> */}