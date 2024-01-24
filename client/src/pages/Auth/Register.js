import React, { useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import Success from '../../Toasts/Success';
import StateList from '../../components/DropdownLists/StateList';
const Register = () => {

  

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Cpassword,setCPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address1,setAddress1]=useState("");
    const [address2,setAddress2]=useState("");
    const [answer,setAnswer]=useState("");
    const [pin,setPin]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [tnc,settnc]=useState(false);

    
    const navigate=useNavigate(); // use to navigate from one page to another 

    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(tnc){
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address1,address2,pin,city,state,answer});
            if(res && res.data.success){
                 navigate('/login');
                toast.custom(<Success title="Register Successful"/>);
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went error');
        }
      }
      else{
        toast.error("please accept terms and condition");
      }
    }

    

  return (
    <Layout>
      <div className='register' style={{marginTop:"60px"}}>
        <h1>Register</h1>

<div className='container w-50'>
<form className="row g-3" onSubmit={handleSubmit}>
  <div className='row'>
  <div className="col-md-12 mt-4">
    <label htmlFor="inputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=>{setName(e.target.value)}} required />
  </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>{setEmail(e.target.value)}} require />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPhone" className="form-label">Phone No.</label>
    <input type="number" className="form-control" id="inputPhone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
  </div>

  <div className="col-md-6">
    <label htmlFor="inputpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputpassword" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCPassword" className="form-label"> Confirm Password</label>
    <input type="text" className="form-control" id="inputCPassword" value={Cpassword} onChange={(e)=>{setCPassword(e.target.value)}} required/>
  </div>

  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address1} onChange={(e)=>{setAddress1(e.target.value)}} required />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e)=>{setAddress2(e.target.value)}} required />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}} required />
  </div>
  <div className="col-md-4">
    <StateList state={state} setState={setState}/>
    {/* <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" value={state} onChange={(e)=>{setState(e.target.value)}} >
      <option selected>Choose State</option>
      <option >West Bangal</option>
      <option >Bihar</option>
      <option  required>...</option>
    </select> */}
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" onChange={(e)=>{setPin(e.target.value);}} value={pin} />
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='What is your favourite sports' value={answer} onChange={(e)=>{setAnswer(e.target.value)}} required  />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" value={tnc} onChange={(e)=>{settnc(!tnc)}} required/>
      <label className="form-check-label" htmlFor="gridCheck">
        Accept Terms & Conditions
      </label>
    </div>
  </div>
  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary mb-5">Sign Up</button>
  </div>
</form>
</div>

      </div>
    </Layout>
  )
}

export default Register
