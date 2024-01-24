import React from 'react'
import { NavLink } from 'react-router-dom'

const AddServicesMenu = () => {
  return (
    <>
 <div className="list-group">
  <NavLink to="/dashboard/admin/your-services/your-services" className="list-group-item list-group-item-action " aria-current="true">
    Your Services
  </NavLink>
  <NavLink to="/dashboard/admin/your-services/electrician" className="list-group-item list-group-item-action">Electrician</NavLink>
  <NavLink to="/dashboard/admin/your-services/carpenter" className="list-group-item list-group-item-action">carpenter</NavLink>
  <NavLink to="/dashboard/admin/your-services/plumber" className="list-group-item list-group-item-action">Plumber</NavLink>
  <NavLink to="/dashboard/admin/your-services/appliances-Repairer" className="list-group-item list-group-item-action">Appliances Repairer</NavLink>
  <NavLink to="/dashboard/admin/your-services/painting" className="list-group-item list-group-item-action">Home Painting</NavLink>
  <NavLink to="/dashboard/admin/your-services/cleaning" className="list-group-item list-group-item-action">Cleaning</NavLink>
  <NavLink to="/dashboard/admin/your-services/wedding-planner" className="list-group-item list-group-item-action">Wedding Planner</NavLink>
  
</div>

    </>
  )
}

export default AddServicesMenu
