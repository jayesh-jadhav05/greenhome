import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../Componets/header.scss';
const Header = () => {

    const [styles,setStyle] = useState({});
    const [check,setCheck] = useState(true);
    const [userDetails,setUserDetails] = useState({ username : "", email : "" });
   

    const UserLogout = () => {
        window.location.href = "/login";
    };

    useEffect(() => {
        // if the user is login then cart and profile show else not..
        if(localStorage.getItem("CurrentUser") !== null){
        const data = JSON.parse(localStorage.getItem("CurrentUser"));
        const newUser = {
            username : data.firstname + data.lastname,
            email : data.email
        };
        setUserDetails(newUser);
    }
    },[])
    // this function for toggle a user profile card..
    const toggleMenu = ()  => {

        if(check === true){
          setStyle({maxHeight : "400px"});
          setCheck(false);
        }else{
            setStyle({maxHeight : "0"});
            setCheck(true);
        } 
    };

    const showOrNot = () =>{
        return(
            <React.Fragment>
            <NavLink to="/cart"><i className="fa-solid fa-bag-shopping allIcon"></i></NavLink>
            <span className="number"></span>
            </React.Fragment>
        )
    }
    

    return (
        <header>
            <nav className="navbar">
                <div className="left">
                    <NavLink to="/" className="logo">OrganicFarm</NavLink>
                </div>
                <div className="right">
                    <div className="first">
                        <li><NavLink to="greenhome" className="NavItem">Home</NavLink></li>
                        <li><NavLink to="/about" className="NavItem">About</NavLink></li>
                        <li><NavLink to="/Products" className="NavItem">Products</NavLink></li>
                        <li><NavLink to="/contact" className="NavItem">Contact</NavLink></li>
                        <li><NavLink to="/signup" className="NavItem">Signup</NavLink></li>
                        <li><NavLink to="/login" className="NavItem">Login</NavLink></li>
                    </div>
                    <div className="first">
                    {localStorage.getItem("CurrentUser") !== null ? showOrNot() : null}
                    {localStorage.getItem("CurrentUser") !== null ?  <i className="fa-solid fa-user allIcon" onClick={() => toggleMenu()}></i> : null}
                       
                        <div className="sub-menu-wrap" id="subMenu" style={styles}>
                            <div className="sub-menu">
                                <img src="productsImages/user.png" alt="userLogo" />
                                    <h3>{userDetails.username}</h3>
                                    <p>{userDetails.email}</p>
                                    <div className="icons">
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram"></i>
                                        <i class="fa-brands fa-linkedin"></i>
                                        <i class="fa-brands fa-twitter"></i>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                    <button>Setting</button>
                                    <button onClick={() => UserLogout()}>Logout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;