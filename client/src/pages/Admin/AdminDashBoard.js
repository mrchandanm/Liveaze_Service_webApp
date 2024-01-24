import React, { useContext } from 'react'
import AdminDashBoardLayout from '../../components/Layouts/AdminDashBoardLayout'
 import { AuthContext } from '../../Context/auth'
const AdminDashBoard = (props) => {
     const [auth]=useContext(AuthContext);
  return (
    <AdminDashBoardLayout>
  <h1>Details</h1>
  <h1>Name: {auth.user.name}</h1>
      <h3>email: {auth.user.email}</h3>
      <h3>Phone:{auth.user.phone}</h3>
      <h3>profession: {auth.user.profession}</h3>
      <h3>address: {auth.user.address}</h3>
      <h3>user Id: {auth.user.id}</h3>
    </AdminDashBoardLayout>
  )
}

export default AdminDashBoard
