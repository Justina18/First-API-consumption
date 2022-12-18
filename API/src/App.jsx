import "./App.css";
import Header from "./Header/Header";
import Shop from "./Component/Shop"
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Detail from "./Component/Detail/Detail";
import Cart from "./Component/Cart/Cart";

function App() {
  
  return (
    <div className="App">
     <Router>
      <Header /> 
        <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/detail:id" element={<Detail/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App