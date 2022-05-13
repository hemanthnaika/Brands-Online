import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Login } from './Components/Auth/Login/App';

import SignupCard from './Components/Auth/SignUp/SignUp';

import { Cart } from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Page/Home';
import { Products } from './Components/Products/Card/Products';
import Details from './Components/Products/ProductDetalis/Detalis';
import Light from './Light';


function App() {
  return (
    <div className="App">
     <Light/>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/signUp' element={<SignupCard/>} />
        <Route exact path='/shop/:productId' element={<Details/>} />
      </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
