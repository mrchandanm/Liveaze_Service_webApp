import React, { useContext, useState } from 'react'
import AdminDashBoardLayout from '../../../components/Layouts/AdminDashBoardLayout'
// import AdminMenu from '../../../components/Layouts/AdminMenu'
import AddServicesForm from '../../../components/Layouts/AddServicesForm'
import axios from 'axios'
import { AuthContext } from '../../../Context/auth'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Success from '../../../Toasts/Success'
import AddServicesMenu from '../../../components/Layouts/AddServicesMenu'


const AddPlumbingService = () => {


    const [auth]=useContext(AuthContext)
    const [minimumCharge,setminimumCharge]=useState("");
    const [maximumCharge,setmaximumCharge]=useState("");
    const [serviceName,setServiceName]=useState("");

     const adminid=auth.user.id;
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
       
    e.preventDefault();
    
        try {   
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/admin/add-services`,{minimumCharge,maximumCharge,serviceName,serviceType:"Plumber",providedBy:adminid}
            );


            if(res && res.data.success){
                console.log("success");
                navigate("/dashboard/admin/your-services")
               toast.custom(<Success title="service added Successful"/>);
           }
           else{
               toast.error(res.data.message);
               console.log(res.data.message);
           }
        } catch (error) {
            console.log(error)
            toast.error(error);
        }
      
    }

  return (
    <AdminDashBoardLayout>
    <div className="container-fluid p-3 m-2 ">
       <div className="row">
         <div className="col-md-2">
          <AddServicesMenu/>
           {/* <AdminMenu /> */}
         </div>

         <div className="col-md-10">
           <div className="card  p-2">
            <h1>Plumbing Services</h1>
            <AddServicesForm handleSubmit={handleSubmit} minimumCharge={minimumCharge} setminimumCharge={setminimumCharge} maximumCharge={maximumCharge} setmaximumCharge={setmaximumCharge} serviceName={serviceName} setServiceName={setServiceName}/>
           </div>
         </div>
       </div>
     </div>
   </AdminDashBoardLayout>
  )
}

export default AddPlumbingService
