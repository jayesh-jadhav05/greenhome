import React, { useState } from 'react';
import '../Styles/signup.scss';
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [seePassword,changeSeePassword] = useState("password");
  const [check,setCheck] = useState(true);
  // Handle Login Inputs State.
  const [currUser,setCurrUser] = useState({
    email : "",
    password : ""
  });

  const navigate = useNavigate();

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
      // Use Toast for user login seccessfuly
      toast.success('Login Successfully 👍', { position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
      setTimeout(() => {navigate('/')},2000) // Redirect to dashboard page
    } else {
      // use toast for invalid password or email.
      toast.error('Invalid email or password 👎', { position: "top-center",autoClose: 4000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
      setCurrUser({email : "",password : ""})
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
          <input type="email" placeholder="Email" name='email' required id="emailid" value={currUser.email} onChange={handleLogin} autoComplete='off'/>
          <p className='in'><input type={seePassword} placeholder="Password" name='password' required id="password" value={currUser.password} onChange={handleLogin}/> <i class="fa-regular fa-eye" onClick={() => SeaPassword()}></i></p>
          <button className="btn" onClick={loginNow} id="sign">Login</button>
          <p>Don't have any account? <NavLink to="/signup">Signup</NavLink></p>
        </div>
      </section>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Login;