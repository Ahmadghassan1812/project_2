
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Navbar';
import Home from './Home';
import Product from './Product';
import Payment from './Payment';
function App() {
  return (
    <div className="App">
    <Nav/>
    
    <BrowserRouter>
    <Routes>
    <Route
     exact
      path="/"
   element={<Home />}
    ></Route>
    <Route
     exact
     path="/Product"
       element={<Product/>}
     ></Route>
     <Route
         exact
      path="/Payment"
        element={<Payment />}
      ></Route>
      </Routes>
                
   </BrowserRouter>

     
    </div>
  );
}

export default App;