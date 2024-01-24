import React, { useContext, useEffect, useState } from 'react'
import AdminDashBoardLayout from '../../../components/Layouts/AdminDashBoardLayout'
// import AdminMenu from '../../../components/Layouts/AdminMenu'
import AddServicesForm from '../../../components/Layouts/AddServicesForm'
import axios from 'axios'
import { AuthContext } from '../../../Context/auth'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Success from '../../../Toasts/Success'
import AddServicesMenu from '../../../components/Layouts/AddServicesMenu'

const FanRepair = () => {
  
 
    const [auth]=useContext(AuthContext)
    const [minimumCharge,setminimumCharge]=useState("");
    const [maximumCharge,setmaximumCharge]=useState("");
    const [serviceInclude,setserviceInclude]=useState(["hello","hello","hello"]);
    const [serviceExclude,setserviceExclude]=useState(["hello","hello","hello"]);
    const [images,setimages]=useState("");

   
useEffect(()=>{
  setserviceInclude(["hello","hello","hello3"]);
  setserviceExclude(["hello","hello","hello3"]);
},[])
    const adminid=auth.user.id;
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
       
    e.preventDefault();
    
        try {
          const formData=new FormData();
          formData.append("images",images)
          formData.append("adminid",adminid)
          formData.append("minimumCharge",minimumCharge)
          formData.append("maximumCharge",maximumCharge)
          formData.append("serviceInclude",serviceInclude)
          formData.append("serviceExclude",serviceExclude)

            // const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/fan-repair`,{adminid,minimumCharge,maximumCharge,serviceInclude,serviceExclude,images});
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/fan-repair`,formData,
            {
              headers: {"Content-Type":"multipart/form-data"}
            });


            if(res && res.data.success){
                console.log("success");
                navigate("/dashboard/admin/add-services")
               toast.custom(<Success title="service added Successful"/>);
           }
           else{
               toast.error(res.data.message);
               console.log(res.data.message);
           }
        } catch (error) {
            console.log(error)
            toast.error('something went error');
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
            <h1>Fan Repair</h1>
            <AddServicesForm handleSubmit={handleSubmit} minimumCharge={minimumCharge} setminimumCharge={setminimumCharge} maximumCharge={maximumCharge} setmaximumCharge={setmaximumCharge} images={images} setimages={setimages} />
           </div>
         </div>
       </div>
     </div>
   </AdminDashBoardLayout>
  )
}

export default FanRepair
