import { Avatar, Badge, Button, Card, Carousel, Divider, Drawer } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillTag } from 'react-icons/ai';
import ConfirmOrderDrawer from './ConfirmOrderDrawer';

const SideDrawer = ({onClose, draweropen,selected}) => {

  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [pin,setPin]=useState("");
  const [state,setstate]=useState("");
  const [city,setcity]=useState("");
  const [address,setaddress]=useState("");
  const [dateandTime,setdateandTime]=useState("");

  


    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
      };
      const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
      };

    const contentStyle = {
        height: '200px',
        color: "#fff",
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div>
      <Drawer
        title="Book your order"
        placement="right"
        width={500}
        headerStyle={{}}
        onClose={onClose}
        open={draweropen}
      >
        <div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        <hr></hr>
        <div className="container">
          <p style={{ fontSize: "20px" }}>
            {selected?.providedBy?.name}{" "}
            <Badge count="4.5 &#9733;" color="green" />
          </p>
          <div style={{ fontSize: "18px", marginTop: "-8px" }}>
            <b>{selected.serviceName}</b>
          </div>

          <p style={{ marginTop: "-2px", marginBottom: "-22px" }}>
            {" "}
            charges Range b/w
          </p>
          <br />
          <p style={{ fontSize: "25px", color: "green" }}>
            <b> &#8377; 100 - &#8377; 200</b>
          </p>

          <Divider>Offers</Divider>
          <ul>
            <li>
              <AiFillTag color="green" />
              10% discount on payment through upi
            </li>
            <li>
              <AiFillTag color="green" />
              50% discount for the first time user
            </li>
            <li>
              <AiFillTag color="green" />
              5% discount on spare parts
            </li>
          </ul>

          <Divider>Details</Divider>
          <ul>
            <li>price of spare part will be added after service</li>
            <li>You have to provide Ladder if required</li>
            <li>6 month warranty will be given </li>
            <li>date and time can be varry</li>
          </ul>

          <Divider orientation="left">Rating and Reviews <Button style={{marginLeft:"10px"}}>Rate Service</Button></Divider>
          <p>12673 reviews & 58237 ratings</p>
          <div>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-success rounded-pill">5 &#9733;</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-success rounded-pill">5 &#9733;</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-success rounded-pill">4 &#9733;</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-warning rounded-pill">3 &#9733;</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-warning rounded-pill">2 &#9733;</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <span className="badge bg-danger rounded-pill">1 &#9733;</span>
              </li>
            </ol>
          </div>
        </div>

        <div
          className="row ms-1 "
          style={{
            bottom: "0",
            position: "sticky",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            className="col-md-6 shadow-lg rounded"
            style={{ backgroundColor: "#19B004", color: "#fff" , fontSize:"18px" }}
          >
            <NavLink
              className="nav-link text-center p-2 "
              style={{ width: "100%", height: "40px" }}
            >
              <b>Add to wishlist</b>
            </NavLink>
          </div>
          <div
            className="col-md-6 shadow-lg rounded"
            style={{ backgroundColor: "#E57505", color: "#fff"  , fontSize:"18px"}}
          >
            <NavLink
              onClick={showChildrenDrawer}
              className="nav-link text-center p-2"
              style={{ width: "100%", height: "40px"}}
            >
              <b>Book Now</b>
            </NavLink>
          </div>
        </div>

       <ConfirmOrderDrawer onClose={onClose} onChildrenDrawerClose={onChildrenDrawerClose} childrenDrawer={childrenDrawer} selected={selected} ></ConfirmOrderDrawer>
      </Drawer>
    </div>
  );
}

export default SideDrawer
