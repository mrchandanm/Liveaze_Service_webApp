import React from 'react'
import { NavLink } from 'react-router-dom'

const Collapse = (props) => {
  return (
    <div>
       <div>
            <div className="d-inline-flex gap-1 w-100  border border-3 h-50 mb-0.5 p-2 rounded">
              <button
                className="nav-link w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={props.target}
                aria-expanded="false"
                aria-controls={props.heading}
              >
                {props.heading}
              </button>
            </div>
            <div className="collapse" id={props.heading}>
                {props.options.map(option=>(
                     <div key={option.key} className="card card-body p-1">
                     <NavLink  className='nav-link' to={option.link}>{option.value}</NavLink>
                    </div>
                ))}
             
            </div>
          </div>
    </div>
  )
}

export default Collapse
