import React from "react";
import ServiceNameList from "../DropdownLists/ServiceNameList";
import ImageUploads from "../Upload/ImageUploads";
//import Checkbox from "../CheckBox/Checkbox";

const AddServicesForm = ({handleSubmit,minimumCharge,setminimumCharge,maximumCharge,setmaximumCharge,serviceName,setServiceName,images,setImages}) => {

// const [img,setimg]=useState("https://static.thenounproject.com/png/3752804-200.png")
    // const handleselectimg=(e)=>{
    //     e.preventDefault();
    //     setimg(URL.createObjectURL(e.target.files[0]));
    //     console.log(e.target.files[0])
    // setimages(e.target.files[0]);
    // }
  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        
      <form onSubmit={handleSubmit} >
        <div>
          <div className="row ">
            <div className="col-md-12 mb-3">
              <ServiceNameList serviceName={serviceName} setServiceName={setServiceName}/>
            </div>
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Minimum Charge in rupees"
                  value={minimumCharge}
                  onChange={(e)=>{setminimumCharge(e.target.value)}}
                />
                <label htmlFor="floatingInput">Minimum Charge in rupees</label>
              </div>
            </div>
           
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Maximum Charge in rupees"
                  value={maximumCharge}
                  onChange={(e)=>{setmaximumCharge(e.target.value)}}
                />
                <label htmlFor="floatingPassword">Maximum Charge in rupees</label>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
        <ImageUploads images={images} setImages={setImages} />
        </div>
        
        {/* <div className="card " style={{height:"210px", border:"2px dashed gray"}}>
           <input  className="form-control m-auto " type="file" accept="image/*" onChange={handleselectimg}/><p>or Drag & drop</p>
        <img src={img} alt="..." style={{width:"100px",margin:"auto"}} name="photos"></img>
        </div> */}
     
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddServicesForm;
