import './App.css';
import ItemListContainer from './Components/ItemListConteiner/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
function App() {
  return (
  <>
  <Navbar />
  <ItemListContainer greeting = "The Table Game"/>
  </>
  );
}

export default App;
