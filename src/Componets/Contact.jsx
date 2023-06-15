import React, { useState } from "react";
import '../Componets/contact.scss';



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
                alert(`${details.name} has Successfully Submited his Form 👍`);
                setDetails({name : "",email : "",message : "",result : ""});
            }else{
                alert("Your Captch is Incorrect 👎");
            }
        }else{
            alert("Please Fill The Form To Move Forword👎");
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
        </React.Fragment>
    )
};

export default Contact;