import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinn from '../Spinn';


const PrivateRoute = () => {
 const [ok,setok]=useState(false);
 const [auth]=useContext(AuthContext);

 useEffect(()=>{
    const authCheck=async ()=>{
        const res=axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-auth`,{
            headers:{
                "Authorization":auth?.token
            }
        })
        if((await res).data.ok){
            setok(true)
        }
        else{
            setok(false)
        }
    }

    if(auth?.token) authCheck()
 },[auth?.token])

 return ok? <Outlet/>: <Spinn path='login'/>
}

export default PrivateRoute;
