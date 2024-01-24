import React from 'react'
// import { AuthContext } from '../../Context/auth';
import Collapse from '../DropDown/Collapse';
import { NavLink } from 'react-router-dom';
const AdminMenu = () => {
  const options=[
    {link:"/dashboard/admin/add-services/fan-repair",value:"fan Repairer",key:"electrician"},
    {link:"/dashboard/admin/completed-orders",value:"TV Repairer",key:"Plumber"},
    {link:"/dashboard/admin/add-services/ac-repair",value:"Ac Repairer", key:"Carpenter"},
  ]
 
  return (
    <>
      <div className="text-center">
        <div className="card p-2 border-success ">
          <NavLink to="/dashboard/admin/add-services" className="nav-link card p-2 bg-secondary">Your Services</NavLink>
         <Collapse options={options} heading="electrician" target="#electrician"/>
         <Collapse options={options} heading="Plumber" target="#Plumber" />
         <Collapse options={options} heading="Carpenter" target="#Carpenter"/>
         <Collapse options={options} heading="Painter" target="#Painter" />
         {/* <Collapse options={options} heading="Civil-Engineer" target="#Civil-Engineer" key="Civil-Engineer"/>
         <Collapse options={options} heading="Advocate" target="#Advocate" key="Advocate"/>
         <Collapse options={options} heading="Car-Repairer" target="#Car-Repairer" key="Car-Repairer"/>
         <Collapse options={options} heading="Ac-Repairer" target="#Ac-Repairer" key="Ac-Repairer"/> */}
        </div>
      </div>
    </>
  );
}

export default AdminMenu
