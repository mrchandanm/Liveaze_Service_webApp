import React from 'react'
const StateList = ({state,setState}) => {
    let Allstates = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  return (
    <>
       <label htmlFor="inputState" className="form-label"><b style={{color:"red"}}>*</b>State</label>
    <select id="inputState" className="form-select" value={state} onChange={(e)=>{setState(e.target.value)}} >
      <option selected>Choose State</option>
      {Allstates.map(option=>(
         <option >{option}</option>
      ))}
    </select>
    </>
  )
}

export default StateList
