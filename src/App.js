import NavBar from "./components/NavBar"
import "./styles.css"
import ItemListContainer from "./components/ItemListContainer"
import {BrowserRouter, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CustomProvider from "./components/CartContext"

const App = () =>{
  

  return(
    <CustomProvider>

      <BrowserRouter>
        
        <NavBar/>
        
        <Route path="/" exact> 
          <ItemListContainer greeting="Hola como estass?"/>
        </Route>
        
        <Route path="/category/:id" exact> 
          <ItemListContainer greeting="Hola como estass?"/> 
        </Route>
        
        <Route path="/item/:id" exact>
          <ItemDetailContainer/>
        </Route>

      </BrowserRouter>
    </CustomProvider>  

  )
}



export default App