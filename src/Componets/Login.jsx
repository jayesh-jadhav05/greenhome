import React, { useState } from 'react';
import './signup.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [seePassword,changeSeePassword] = useState("password");
  const [check,setCheck] = useState(true);
  // Handle Login Inputs State.
  const [currUser,setCurrUser] = useState({
    email : "",
    password : ""
  });


  let name,value;
  const handleLogin = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCurrUser({ ...currUser, [name]: value });
  };

  const loginNow = () => {
    var users = JSON.parse(localStorage.getItem("WelComeUsers")) || [];

    // Check if the user exists
    var user = users.find(function (u) {
      return u.email === currUser.email && u.password === currUser.password;
    });

    if (user) {
      // Store the logged in user in local storage
      localStorage.setItem("CurrentUser", JSON.stringify(user));
      alert("Logged Successfuly");
      window.location.href = "/"; // Redirect to dashboard page
      // document.getElementById('shopNowIn').href = "./shop.html";
    } else {
      alert("Invalid email or password.")
    }
  };

 const SeaPassword = () => {
     if(check === true){
      changeSeePassword("password");
      setCheck(false)
     }else{
      changeSeePassword("text");
      setCheck(true)
     }
 }

  return (
    <React.Fragment>
      <section className="SignUp">
        <div className="container">
          <h2>Login 💻</h2>
          <input type="email" placeholder="Email" name='email' required id="emailid" value={currUser.email} onChange={handleLogin}/>
          <p className='in'><input type={seePassword} placeholder="Password" name='password' required id="password" value={currUser.password} onChange={handleLogin}/> <i class="fa-regular fa-eye" onClick={() => SeaPassword()}></i></p>
          <button className="btn" onClick={loginNow} id="sign">Login</button>
          <p>Don't have any account? <NavLink to="/signup">Signup</NavLink></p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;