import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import TestApi from "./components/TestApi";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Sucursales from "./components/Sucursales";


function App() {

  const onAdd = (count) => {
    alert(`sumaste ${count} al carrito`)
  }

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer cantInicial={1} onAdd={onAdd}/>}/>
      <Route path="/home" element={<ItemListContainer cantInicial={1} onAdd={onAdd}/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="/sucursales" element={<Sucursales/>}/>
      <Route path="/ItemDetailConteiner/:id" element={<ItemDetailContainer/>}/>
      <Route path="/Category/:id" element={<ItemListContainer cantInicial={1} onAdd={onAdd} />}/>
    </Routes>
    </BrowserRouter>
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