import React, { useState } from "react";
import '../Styles/contact.scss';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

   // This State For Generating Random Captch numbers..
    const [randomNo,setRandomNo] = useState({firstNo : Math.floor(Math.random() * 10), SecondNo : Math.floor(Math.random() * 10)});
    // Create States For inputs
    const [details,setDetails] = useState({name : "",email : "",message : "",result : ""});
   
    // input Change event When user Type his input This Event will Trigger Every key and Store it Into the states...
    const handleChange = (e) => {
           const {name,value} = e.target;
           setDetails((prev) => {
            return { ...prev, [name]:value };
           });
    };


    // This function Check The Condition if condition is right the submit the form else give error..
    const submitForm = () => {
        const answer = randomNo.firstNo + randomNo.SecondNo;
        if(details.name !== "" && details.email !== "" && details.message !== "" && details.result !== ""){
            if(answer === Number(details.result)){
                toast.success(`${details.name} has Successfully Submited Form 👍`, {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
                setDetails({name : "",email : "",message : "",result : ""});
            }else{
                toast.error('Your Captcha is incorrect 👎', { position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
            }
        }else{
            toast.error('Please Fill The Form To Move Forword👎', { position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
        }
    };

    // This State For Generating Random Captch numbers..
    const refreshs = () => {
        setRandomNo({
            firstNo : Math.floor(Math.random() * 10),
            SecondNo : Math.floor(Math.random() * 10)
        });
    };

    return (
        <React.Fragment>
            <div className="ContactContainer">
                <div className="Title">
                    <h2>To get in touch, email us at...📲</h2>
                </div>
                <div className="Form">
                    <input type="text" placeholder="Name" name="name" value={details.name} onChange={handleChange} required/>
                    <input type="email" placeholder="Email" name="email" value={details.email} onChange={handleChange} required/>
                    <textarea type="text" placeholder="message" name="message" value={details.message} onChange={handleChange} required/>
                </div>
                <div className="captcha">
                    <p><span>{randomNo.firstNo}</span> + <span>{randomNo.SecondNo}</span> = </p>
                    <input type="text" name="result" value={details.result} onChange={handleChange} required/>
                    <button onClick={refreshs}><i class="fa-solid fa-rotate"></i></button>
                </div>
                <button className="btn" onClick={submitForm}>Submit</button>
            </div>
            <ToastContainer />
        </React.Fragment>
    )
};

export default Contact;