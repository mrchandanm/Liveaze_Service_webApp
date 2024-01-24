import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layouts/Layout'
 import { AuthContext } from '../Context/auth'
import {Avatar, Button, Card, Divider, FloatButton, Image, Modal, Space} from "antd";
import { Layout as Mlayout, Menu, theme } from 'antd';
// import { NavLink } from 'react-router-dom';
import HomePageMenu from '../components/DropDown/HomePageMenu';
import axios from 'axios';
import { ToastBar, toast } from 'react-hot-toast';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import PageList from '../components/Lists/PageList';
import { UserOutlined } from '@ant-design/icons';
import ServiceCard from '../components/Card/ServiceCard';
import ViewDetails from '../components/Modal/ViewDetails';
import SideDrawer from '../components/Drawer/SideDrawer';
import { NavLink } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
const HomePage = () => {
const refresh=()=>{
  window.location.reload();
}

  const [select, setSelect]=useState("");
  const [services,setServices]=useState([]);
  const [selected,setSelected]=useState([]);
    const [auth]=useContext(AuthContext);
    const pin=auth?.user?.pin;

  
    const [draweropen, setDraweropen] = useState(false);

    const showDrawer = (option) =>()=>{
      setSelected(option);
      setDraweropen(true);
    };
    const onClose = () => {
      setDraweropen(false);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (option) =>()=> {
      setSelected(option);
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


  
  useEffect(()=>{
    const fetchServices=async()=>{
      try {
       const {data}= await axios.get(`${process.env.REACT_APP_API}/api/v1/user/get-services?service=${select}&pin=${pin}`)
       if(data.success){
        setServices(data.doc);
       }
       else{
       }
       
      } catch (error) {
       console.log(error)
       toast.error("something went error");
      }
     }
    fetchServices();
  },[select,pin])
  

  if(services.length===0 && select===""){
    return(
      <Layout>
      <Mlayout >
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 70,
          bottom: 0,
         
        }}
        width={217}
        theme='light'>
          
         <Space direction='vertical'  >
         <div className='text-center'><NavLink to="/" className="nav-link" style={{fontSize:"30px"}}><AiFillHome style={{color:"green"}}></AiFillHome><b style={{marginLeft:"10px"}}>Home</b></NavLink></div>
       <HomePageMenu setSelect={setSelect}></HomePageMenu>
       </Space>
      
       </Sider>
        <Content style={{
            margin: '45px 20px 0',
            overflow: 'initial',
          }}>
         <div  style={{
              padding: 24,
                marginLeft: 200,
                display:'flex',
            }}>
           <div className='row' style={{display:"flex"}}>
             <ServiceCard ></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             <ServiceCard></ServiceCard>
             </div>
          
  
  
  
          {/* <h1>{pin}</h1>
          <h1>{JSON.stringify(services[0],null,4)}</h1>
          <h1>{services[0]?.providedBy?.name}</h1> */}
          </div>
        </Content>
      </Mlayout>
    </Layout>
     
    )
  }




if(services.length===0 && select!==""){
  return(
    <Layout>
    <Mlayout hasSider>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 70,
        bottom: 0,
      }}>
        <Space >
     <HomePageMenu setSelect={setSelect}></HomePageMenu>
     </Space> 
     </Sider>
      <Content style={{
          margin: '32px 16px 0',
          overflow: 'initial',
        }}>
       <div  style={{
            padding: 24,
              marginLeft: 200,
              display:'flex'
          }}>
        
        <h1>Service not available as of now, we will be available soon</h1>
        


        {/* <h1>{pin}</h1>
        <h1>{JSON.stringify(services[0],null,4)}</h1>
        <h1>{services[0]?.providedBy?.name}</h1> */}
        </div>
      </Content>
    </Mlayout>
  </Layout>
   
  )
}

  return (
    <Layout>
      <Mlayout hasSider>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 70,
          bottom: 0,
        }}>
           
          <Space >
       <HomePageMenu setSelect={setSelect}></HomePageMenu>
       </Space> 
       </Sider>
        <Content style={{
            margin: '32px 16px 0',
            overflow: 'initial',
          }}>
         <div  style={{
              padding: 24,
                marginLeft: 200,
                display:'flex'
            }}>

             <PageList services={services}></PageList>

             <div className='row d-flex'>
              {services.map(option=>(
             
                  <ServiceCard showModal={showModal(option)} showDrawer={showDrawer(option)}></ServiceCard>
  
              ))}
             </div>

             
          
              {/* {services.map(option=>(
                <div>
                 <div className="card" style={{width: '18rem', padding:"20px", margin:"20px"}}>
                 <img src={option.images[0]?.url} className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">{option.providedBy.name}</h5>
                   <h5 className="card-title">{option.serviceType}</h5>
                   <h5 className="card-title">{option.serviceName}</h5>
                   <a href="#" className="btn btn-primary">Appoint</a>
                 </div>
               </div>
               </div>
              ))} */}
              


            
          


          {/* <h1>{pin}</h1>
          <h1>{JSON.stringify(services[0],null,4)}</h1>
          <h1>{services[0]?.providedBy?.name}</h1> */}
          
          <ViewDetails isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} selected={selected} ></ViewDetails>
          <SideDrawer draweropen={draweropen} onClose={onClose} selected={selected} ></SideDrawer>
          </div>
        </Content>
      </Mlayout>
    </Layout>
  )
}

export default HomePage
