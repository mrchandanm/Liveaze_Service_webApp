import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Spinn = ({path="/login"}) => {
    var [count, setCount]=useState(5);
    const navigate=useNavigate();
    const location=useLocation();

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(count--)
        },200)

        count===0 && navigate(`${path}`,{
            state:location.pathname
        });
        return ()=>clearInterval(interval);
    },[count,navigate,location,path])
  return (
    <>
       <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}} >
        <h1 className='text-center'>Redirecting to you in {count} sec</h1>
  <div className="spinner-border" role="status" >
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  )
}

export default Spinn
