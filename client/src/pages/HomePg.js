import { Button, Layout, Space } from 'antd'
import React from 'react'
import HomePageMenu from '../components/DropDown/HomePageMenu'
import Sider from 'antd/es/layout/Sider'
import Header from '../components/Layouts/Header'
import { Content } from 'antd/es/layout/layout'
import ServiceCard from '../components/Card/ServiceCard'
import Footer from '../components/Layouts/Footer'

const HomePg = () => {
  return (
    <Layout>
        <Header></Header>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 70,
          bottom: 0,
         
        }}
        width={217}>
          
         <Space direction='vertical'  >
         <Button className='text-center'>Home</Button>
       <HomePageMenu ></HomePageMenu>
       </Space>
       </Sider>
       <Layout>
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
       </Layout>
       <Footer></Footer>
    </Layout>
  )
}

export default HomePg
