import React from "react";
import Header from './Componets/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componets/Home';
import About from './Componets/About';
import Products from './Componets/Products';
import Contact from './Componets/Contact';
import '../src/App.scss';
import ShoppingCart from "./Componets/ShoppingCart";
import Footer from "./Componets/Footer";
import './Componets/product.scss';
import Signup from './Componets/Signup';
import Login from './Componets/Login';
const App = () => {
    return (
        <React.Fragment>  
        <BrowserRouter>
        <Header />
                <Routes>
                   <Route path="grrenhome" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/products" element={ <Products /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/signup" element={ <Signup /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/cart" element={ <ShoppingCart/> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;