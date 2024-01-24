import React from 'react'

const ServiceNameList = ({serviceName,setServiceName}) => {

   let AllsercviceNames=[
   ["fan repair", "Ac repaire", "Refrigerator Repair","Tv Repair"],
   ["Bathroom tiles fitting", "Ac repaire", "Refrigerator Repair","Tv Repair"],
   ]
  return (
    <>
    <select  id="inputState" className="form-select" value={serviceName} onChange={(e)=>{setServiceName(e.target.value)}} >
      {/* <option selected>Choose service name</option> */}
      {AllsercviceNames[1].map(option=>(
         <option key={option}>{option}</option>
      ))}
    </select>
    </>
  )
}

export default ServiceNameList
