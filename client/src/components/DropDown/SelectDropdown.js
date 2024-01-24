import React from 'react'

const SelectDropdown = ({options=[],setValue}) => {
    const value="hello";
    const handleSelect=(e)=>{
       setValue(e.target.value);
    }
  return (
    <div>
       <select
              className="form-select form-select-md mb-3"
              aria-label="Large select example"
              onChange={handleSelect}
            >
              <option selected value={value} defaultValue="no option">Select Profession</option>
              {options.map(option=>(
                  <option key={option.label} value={option.value} defaultValue="No option">{option.label}</option>
              ))}
            </select>
    </div>
  )
}

export default SelectDropdown
