import "./App.css";
import Header from "./Header/Header";
import Shop from "./Component/Shop"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Detail from "./Component/Detail/Detail";
import Cart from "./Component/Cart/Cart";
import { useState } from "react";
import Jew from "./Component/Jew/Jew";
import Cloth from "./Component/Clothes/Clothes";
import Elect from "./Component/Elect/Elect";
import Women from "./Component/Women/Women";

function App() {
  

  const [background, setBackground] = useState( 'grey')
  const Clicked=()=>{
    
  }

  return (
    <div className="App">
     <Router>
      <Header /> 
        <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            < Route path="/Jew" element={ <Jew/> } />
            <Route path="/Clothes" element={ <Cloth/> } />
            <Route path="/Electronics" element={ <Elect/> } />
            <Route path="/Women Clothes" element={ <Women/> } />
        </Routes>
     </Router>
    </div>
  );
}

export default App