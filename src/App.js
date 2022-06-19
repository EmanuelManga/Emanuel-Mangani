//@ts-check
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Sucursales from "./components/Sucursales";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";


function App() {



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