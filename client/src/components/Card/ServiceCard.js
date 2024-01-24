import { Avatar, Badge, Button, Divider } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

const ServiceCard = ({showModal,showDrawer}) => {
  return (
    <>
       <div className='card shadow m-2 p-2' style={{width:"310px", minHeight:"150px"}}>
             <Badge.Ribbon title="4.5 &#9733; & 12k reviews" text="4.5 &#9733;"  color="green"> 
             <div>
              <h6> <Avatar icon={<UserOutlined />} style={{marginRight:"10px"}} />Chandan Mahato</h6>
                <div className='row'>
                  <div className='col-md-8'>
                 
                    <div style={{marginTop:"-5px", marginBottom:"-5px"}}><b>Fan repairer</b>
                      <br/>
                     <p style={{fontSize:"11px" , marginTop:"-1px", marginBottom:"-22px"}}> charges Range b/w</p>
                      <br/>
                     <b> &#8377; 100 - &#8377; 200</b>
                      <Divider plain style={{marginTop:"-2px", marginBottom:"-2px", fontSize:"11px"}}>Details</Divider>
                      <ul style={{marginBottom:"-5px"}}>
                        <li style={{marginLeft:"-13px", fontSize:"10px"}}>Ceilling Fan and Table Fan Repair</li>
                        <li style={{marginLeft:"-13px", fontSize:"10px"}}>...</li>
                      </ul>
                      <div className='container  mt-2'><a style={{color:"purple", fontSize:"12px"}} onClick={showModal} >View Details</a></div>
                    </div>
          
                  </div>

                  <div className='col-md-4 text-center'>
                    <img src='https://thumbs.dreamstime.com/b/professional-repair-engineer-repairing-broken-tv-177532491.jpg' height={80} width={80}/>

                    <Button type="primary" style={{backgroundColor:"#E57505", marginTop:"-24px"}} onClick={showDrawer} >Book</Button>
                   <div >
                   </div>
                  </div>
                </div>
                </div>
                </Badge.Ribbon>
              </div>
    </>
  )
}

export default ServiceCard
