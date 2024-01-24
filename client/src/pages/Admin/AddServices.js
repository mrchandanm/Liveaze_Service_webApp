import React, { useContext, useEffect, useState } from 'react'
import AdminDashBoardLayout from '../../components/Layouts/AdminDashBoardLayout'
// import AddServicesForm from '../../components/Layouts/AddServicesForm'
import AddServicesMenu from '../../components/Layouts/AddServicesMenu'
//  import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../Context/auth'
import { toast } from 'react-hot-toast'

const AddServices = () => {
  const [auth]=useContext(AuthContext);
const userId=auth.user.id;
const [services,setServices]=useState([]);



useEffect(()=>{
  const fetch= async()=>{
    try {
      const {data}= await axios.get(`${process.env.REACT_APP_API}/api/v1/admin/get-all-services?userId=${userId}`)
     if(data.success){
      setServices(data.doc);
     }
  
    } catch (error) {
     console.log(error)
     toast.error("something went error");
    }
   }
  fetch();
 
},[userId])

  return (
    <AdminDashBoardLayout>
      <div className="container-fluid p-3 m-1">
        <div className="row">
          <div className="col-md-2">
            <AddServicesMenu />
            {/* <AdminMenu /> */}
          </div>

          <div className="col-md-10 text-center ">
            <table className="table table-success table-striped">
            <thead>
                <tr>
                  <th scope="col">sl/n0.</th>
                  <th scope="col">Service Type</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">minimum Charge</th>
                  <th scope="col">maximum Charge</th>
                  <th scope="col">Update/Delete </th>
                </tr>
           </thead>
           <tbody>
            {services?.map((option) => (
         <tr key={option.serviceName}>
           <th scope="row">1</th>
           <td>{option.serviceType}</td>
           <td>{option.serviceName}</td>
           <td>{option.minimumCharge}</td>
           <td>{option.maximumCharge}</td>
          <td> <button className='btn btn-success'>Update</button> <button className='btn btn-danger'>Delete</button></td>
         </tr>
      
            ))}
             </tbody>
             </table>
          </div>
        </div>
      </div>
    </AdminDashBoardLayout>
  );
}

export default AddServices
