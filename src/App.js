import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer mostrarAlgo={"No se que poner aqui :P"}/>
    </div>
  )
}

export default App;
