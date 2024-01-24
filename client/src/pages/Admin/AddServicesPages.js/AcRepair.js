import React from 'react'
import AdminDashBoardLayout from '../../../components/Layouts/AdminDashBoardLayout'
import AdminMenu from '../../../components/Layouts/AdminMenu'
import AddServicesForm from '../../../components/Layouts/AddServicesForm'

const AcRepair = () => {
  return (
    <AdminDashBoardLayout>
       <div className="container-fluid p-3 m-2 ">
       <div className="row">
         <div className="col-md-2">
           <AdminMenu />
         </div>

         <div className="col-md-10">
           <div className="card  p-2">
            <h1>Ac Repair</h1>
             <AddServicesForm/>
           </div>
         </div>
       </div>
     </div>
    </AdminDashBoardLayout>
  )
}

export default AcRepair
