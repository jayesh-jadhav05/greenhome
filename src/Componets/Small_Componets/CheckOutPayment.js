import React, {useState,useContext} from 'react'
import '../../Styles/checkpayment.scss';
import MyContext from '../Context/MyContext';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const CheckOutPayment = () => {

  const [handleInputs, setHandleInputs] = useState({
    name: '',
    phone_number: '',
    pincode: '',
    email: '',
    address: '',
    district: '',
    state: '',
  });
  const [submitAddressCheaker ,setSubmitAddressCheaker] = useState(false);

  const navigate = useNavigate();
  // Get Total Price Of Cart Added Product and get into Usecontext;
  let {totalPrices} = useContext(MyContext);
  
  const saveAddress = () => {
    
    const {name,phone_number,pincode,email,address,district,state} = handleInputs;
    if(name !== '' && phone_number !== '' && pincode !== '' && email !== '' && address !== '' && district !== '' && state !== '')
    {
      toast.success('Address Save Suucessfully 👍', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
      setSubmitAddressCheaker(true);
      setSubmitAddressCheaker({...submitAddressCheaker,name : ''})
    }else{
     toast.error('Please Fill The Address Currectly!!', { position: "top-center",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
    }
   };

  const placeOrder = () => {
    if(submitAddressCheaker === true){
      toast.success('Order Place 👍', {position: "top-center",autoClose: 2000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
      setTimeout(() => {navigate('/')},2000);
    }else{
      toast.error('Please Fill Address First Then Pay!!', { position: "top-center",autoClose: 2000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light",});
    }
  };

  

  return (
    <React.Fragment>
      <div className="container">
        <div className="grid-box">
          <div className="left flex">

            <h2>Add Shipping Address</h2>
            <input type="text" className="input-text" placeholder="Company Name (Optional)" />
            <div className="input">
              <input type="text" placeholder="Name" value={handleInputs.name} onChange={(e) => setHandleInputs({...handleInputs,name : e.target.value})}/>
              <input type="text" placeholder="Phone Number" onChange={(e) => setHandleInputs({...handleInputs,phone_number : e.target.value})}/>
            </div>
            <div className="input">
              <input type="text" placeholder="Pincode" onChange={(e) => setHandleInputs({...handleInputs,pincode : e.target.value})}/>
              <input type="Email" placeholder="Email" onChange={(e) => setHandleInputs({...handleInputs,email : e.target.value})}/>
            </div>
            <input type="text" className="address" placeholder="Address (Area and Street)" onChange={(e) => setHandleInputs({...handleInputs, address : e.target.value})}/>
            <div className="input">
              <input type="text" placeholder="City/District/Town" onChange={(e) => setHandleInputs({...handleInputs, district : e.target.value})}/>
              <input type="text" placeholder="State" onChange={(e) => setHandleInputs({...handleInputs, state : e.target.value})}/>
            </div>
            <button className="save" onClick={() => saveAddress()}>Save and Deliver here</button>

          </div>

          <div className="right flex">

            <div className="info deliver-box">
              <span>Cart --------</span>
              <span className="deliver">Deliver</span>
              <span>-------- Payment</span>
            </div>
            <div className="info">
              <h3>Order Summary</h3>
              <div className="justify-space-between"><p>Order Total</p><p>Rs. {totalPrices}</p></div>
              <div className="justify-space-between"><p>Deliver Charges</p><p>Rs. 50</p></div>
            </div>
            <div className="info img-container">
              <h3>Deliver Summary</h3>
              <div className="flex-space">
                <img src="productsImages/fast-deliver.webp" alt='adds' />
                <div className="img-info">
                  <h5>Standard Deliver</h5>
                  <p>Expected On 21 May,2016</p>
                  <div className="justify-space-between">
                    <h5>Rs 120</h5>
                    <h6>Charges</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="info buttons">
              <div className="justify-space-between">
                <h5>Total Payable</h5>
                <h5>Rs. {totalPrices + 50}</h5>
              </div>
              <button className="place" onClick={() => placeOrder()}>Place Order</button>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  )
}

export default CheckOutPayment