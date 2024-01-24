import React from 'react'
import Layout from './Layout'
// import AdminMenu from '../../components/Layouts/AdminMenu'
import { NavLink } from 'react-router-dom';
//  import { AuthContext } from '../../Context/auth'
const AdminDashBoardLayout = (props) => {
    //  const [auth]=useContext(AuthContext);
  return (
    <Layout>
      <div style={{marginTop:"60px"}}>
      <ul className="nav nav-pills nav-fill mt-2">
          <li className="nav-item">
            <NavLink className="nav-link selected" aria-current="page" to="/dashboard/admin/admin-details">
              Your Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/admin/your-services">
              your Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/admin/pending-orders">
              Pending Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/dashboard/admin/completed-orders">
              Completed Orders
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='text-center'>{props.children}</div>
    </Layout>
  );
}

export default AdminDashBoardLayout
