import React, { useContext, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
import toast from 'react-hot-toast';
import Success from '../../Toasts/Success';
import { AuthContext } from '../../Context/auth';
// import { useAuth } from '../../Context/auth';

const AdminLogin = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useContext(AuthContext);

    // const [auth,setAuth]=useAuth();

    const navigate=useNavigate(); // use to navigate from one page to another 
    const location=useLocation();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/admin-login`,{email,password});
            if( res.data.success){
              localStorage.setItem('auth',JSON.stringify(res.data))
                 navigate(location.state || '/');
                toast.custom(<Success title="Login succesful"/>);
                 setAuth({
                    ...auth,
                     user:res.data.user,
                     token:res.data.token
                 })
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('something went error');
        }
    }


  return (
    <Layout>
    <div className='register'>
      <h1>Admin Login</h1>
 <form onSubmit={handleSubmit}>

<div className="mb-3">
  <input type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
</div>

<div className="mb-3">
  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
</div>
<button type="submit" className="btn btn-primary" >Submit</button>

</form>

    </div>
  </Layout>
  )
}

export default AdminLogin
