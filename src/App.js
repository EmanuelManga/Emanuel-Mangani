import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";


function App() {

  const onAdd = (count) => {
    alert(`sumaste ${count} al carrito`)
  }

  return (
    <div>
    <NavBar />
    <ItemListContainer cantInicial={1} onAdd={onAdd}></ItemListContainer>
    </div>
  )
}

export default App;
