import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignuo';
import Shop from './Pages/Shop'
import Cart from './Pages/Cart';
import ShopCat from './Pages/ShopCAt';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCat category="men" />}/>
        <Route path='/womens' element={<ShopCat category="women"/>}/>
        <Route path='/kids' element={<ShopCat category="kid"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
        </Routes>
        <Routes path="product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Routes>
        



      </BrowserRouter>
    </div>
  );
}

export default App;
