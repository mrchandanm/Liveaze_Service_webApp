import React from 'react'

const ProfessionList = ({Profession,setProfession}) => {
    let Allprofessions=[
        "Electrician",
        "Plumber",
        "Carpenter",
        "Civil Worker",
        "Wedding Planner",
    ]
  return (
    <>
       <label htmlFor="inputState" className="form-label">Profesion</label>
    <select id="inputState" className="form-select" value={Profession} onChange={(e)=>{setProfession(e.target.value)}} >
      <option selected>Choose Profession</option>
      {Allprofessions.map(option=>(
         <option >{option}</option>
      ))}
    </select>
    </>
  )
}

export default ProfessionList
