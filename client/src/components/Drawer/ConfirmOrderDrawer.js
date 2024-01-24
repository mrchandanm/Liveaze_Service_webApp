import { Drawer, Modal } from 'antd'
import React, { useContext, useState } from 'react'
import StateList from '../DropdownLists/StateList';
import DateAndTimePicker from '../Picker/DateAndTimePicker';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ConfirmOrderDrawer = ({onChildrenDrawerClose,childrenDrawer, onClose,selected}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const [auth]=useContext(AuthContext);

    const [name,setName]=useState(auth?.user?.name);
    const [phone,setPhone]=useState(auth?.user?.phone);
    const [address,setAddress]=useState(auth?.user?.address1);
    const [date,setDate]=useState("");
    const [pin,setPin]=useState(auth?.user?.pin);
    const [city,setCity]=useState(auth?.user?.city);
    const [state,setState]=useState(auth?.user?.state);


    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();

        try {   
          const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/user/book-service`,{serviceId:selected._id,orderedBy:auth.user.id,serviceProviderId:selected.providedBy._id,name,phone,pin,state,city,address,dateandTime:date}
          );


          if(res && res.data.success){
              console.log("success");
              onChildrenDrawerClose();
              onClose();
                showModal();
         }
         else{
             toast.error(res.data.message);
             console.log(res.data.message);
         }
      } catch (error) {
          console.log(error)
          toast.error(error);
      }

      
    }

  return (
    <div>
       <Drawer
          title="Confirm Date and Adress"
          width={400}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <form className="row g-3" onSubmit={handleSubmit}>
  <div className='row'>
  <div className="col-md-12 mt-4">
    <label htmlFor="inputName" className="form-label"><b style={{color:"red"}}>*</b>Name</label>
    <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=>{setName(e.target.value)}} required />
  </div>
  </div>
  <div className="col-md-12">
    <label htmlFor="inputPhone" className="form-label"><b style={{color:"red"}}>*</b>Phone No.</label>
    <input type="number" className="form-control" id="inputPhone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required />
  </div>
<div className='col-md-12'>
<label htmlFor="inputPhone" className="form-label"><b style={{color:"red"}}>*</b>Choose Date and Time for service</label>
    <DateAndTimePicker setDate={setDate} date={date} ></DateAndTimePicker>
</div>

  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label"><b style={{color:"red"}}>*</b>Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e)=>{setAddress(e.target.value)}} required />
  </div>

  <div className="col-md-12">
    <label htmlFor="inputCity" className="form-label"><b style={{color:"red"}}>*</b>City</label>
    <input type="text" className="form-control" id="inputCity" value={city} onChange={(e)=>{setCity(e.target.value)}} required />
  </div>
  <div className="col-md-8">
    <StateList state={state} setState={setState}/>
   
  </div>
  <div className="col-md-4">
    <label htmlFor="inputZip" className="form-label"><b style={{color:"red"}}>*</b>Zip</label>
    <input type="text" className="form-control" id="inputZip" onChange={(e)=>{setPin(e.target.value);}} value={pin} />
  </div>

  <div className="col-12 text-center">
    <button type="submit" className="btn btn-primary mb-5"> Confirm Order</button>
  </div>
</form>
        </Drawer>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
       <div className='m-3 p-3'>
        <h1>Congratulations!</h1>
        <h3>Your order has been confirmed</h3>
       </div>
      </Modal>
    </div>
  )
}

export default ConfirmOrderDrawer
