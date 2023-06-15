import React, { useState } from 'react'
import './signup.scss';
import { NavLink } from 'react-router-dom';


const Signup = () => {

  // handle user state inputs
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    comfirmPassword: "",
    Mycart: []
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const SubmitForm = () => {

    var users = JSON.parse(localStorage.getItem("WelComeUsers")) || [];

    // Check if the username is already taken
    var userExists = users.some(function (User) {
      return User.firstname === user.firstname;
    });

    if (userExists) {
      alert(`This UserName already Taken...`)
    } else if (user.password !== user.comfirmPassword) {
      alert("Your Comfirm Password is Wrong");
    } else {
      // Add the new user to the users array
      users.push(user);

      // Update the user data in local storage
      localStorage.setItem("WelComeUsers", JSON.stringify(users));

      alert("Signup Successfully 👍")
      window.location.href = "http://localhost:3000/login"; // Redirect to login page
    };

  };

  return (
    <React.Fragment>
      <section className="SignUp">
        <div className="container">
          <h2>Signup 💻</h2>
          <input type="text" placeholder="First Name" name='firstname' required id="firstname" value={user.firstname} onChange={handleInputs} />
          <input type="text" placeholder="Last Name" name='lastname' required id="lastname" value={user.lastname} onChange={handleInputs} />
          <input type="email" placeholder="Email" name='email' required id="emailid" value={user.email} onChange={handleInputs} />
          <input type="password" placeholder="Password" name='password' required id="password" value={user.password} onChange={handleInputs} />
          <input type="password" placeholder="Comfirm Password" name='comfirmPassword' required id="comfirmpass" value={user.comfirmPassword} onChange={handleInputs} />
          <button className="btn" onClick={SubmitForm} id="sign">SignUp</button>
          <p> You have already user? <NavLink to="/login">Login</NavLink></p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Signup;