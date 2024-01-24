import React from 'react'

const Checkbox = () => {
    const servicetoinclude=[
        {option:"  Inspection and Repair", id:"option1"},
        {option:"  procurement of spare parts (at extra cost)", id:"option2"},
        {option:"  clean up after the service", id:"option3"},
        {option:"  Uc Warrant & damage cover", id:"option4"},
    ]

    const servicetoexclude=[
        {option:"  Please provide a ladder, if required", id:"option1e"},
        {option:"  wiring at extra cost", id:"option2e"},
        {option:"  clean up after the service", id:"option3e"},
        {option:"  warrant on spare parts provided by cystomer", id:"option4e"},
    ]
    const handleOnChecked=(e)=>{

    }
  return (
    <div >
      <div className="row">
        <div className="col-md-6 align-left">
            <h3>Include Services</h3>

            {servicetoinclude.map(option=>(
                <div >
            <input className="form-check-input" value="option1" type='checkbox'  id={option.id} onChange={handleOnChecked}/>
            <label htmlFor={option.id} className="form-check-label ms-2">
               {option.option}
            </label>
            </div>
            ))}

        </div>

        <div className="col-md-6">
        <h3>Exclude services</h3>
        {servicetoexclude.map(option=>(
                <div className='container'>
            <input className="form-check-input" value="option1" type='checkbox'  id={option.id} onChange={handleOnChecked}/>
            <label htmlFor={option.id} className="form-check-label ms-2">
               {option.option}
            </label>
            </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default Checkbox
