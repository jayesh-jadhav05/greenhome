import React, { useState } from "react";
import Header from './Componets/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componets/Home';
import About from './Componets/About';
import Products from './Componets/Products';
import Contact from './Componets/Contact';
import ShoppingCart from "./Componets/ShoppingCart";
import Footer from "./Componets/Footer";
import Signup from './Componets/Signup';
import Login from './Componets/Login';
import CheckOutPayment from './Componets/Small_Componets/CheckOutPayment';
import MyContext from "./Componets/Context/MyContext";
const App = () => {
    const [totalPrices,setTotalPrice] = useState('0')
    return (
        <React.Fragment> 
        <MyContext.Provider value={{totalPrices,setTotalPrice}}> 
        <BrowserRouter>
        <Header />
                <Routes>
                   <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/products" element={ <Products /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/signup" element={ <Signup /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/cart" element={ <ShoppingCart/> } />
                    <Route path="/payment" element={<CheckOutPayment />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
            </MyContext.Provider>
        </React.Fragment>
    );
};

export default App;