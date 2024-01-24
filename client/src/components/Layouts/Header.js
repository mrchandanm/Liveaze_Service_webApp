import React, { useContext } from 'react'
import {NavLink,Link} from 'react-router-dom'
import {TfiGithub} from 'react-icons/tfi'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {AiOutlineHeart,AiFillHome} from 'react-icons/ai'
import { AuthContext } from '../../Context/auth'

export default function Header() {
  const [auth,setAuth]=useContext(AuthContext);

  const handelLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""
    })
localStorage.removeItem('auth');


  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/" style={{fontSize: "25px", color:"green"}}>
              {" "}
              <TfiGithub style={{ marginRight: "5px",fontSize: "25px", color:"green" }} />
              Liveaze
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/">
                  <AiFillHome   style={{ fontSize: "25px", color:"green" }} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  <div style={{ position: "relative" }}>
                    <AiOutlineHeart style={{ fontSize: "25px", color:"green" }} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge-font-size-.075rem" style={{fontSize:"10px"}}>
                      4
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/cart">
                  <div className='position-relative'>
                  <MdOutlineNotificationsActive  style={{ fontSize: "25px", color:"green" }}/>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge-font-size-.075rem" style={{fontSize:"10px"}}>
                      99+
                    </span>
                  </div>
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item " style={{}}>
                    <div className="btn-group dropstart">
                      <button
                        className="nav-link dropdown-toggle ms-4"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Register
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="nav-link" to="/admin-register">
                            {" "}
                            Register as Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/register">
                            Register as User
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* <NavLink className="nav-link" to="/register">
                      Register
                    </NavLink> */}
                  </li>
                  <li className="nav-item">
                    <div className="btn-group dropstart">
                      <button
                        className="nav-link dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Login
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="nav-link" to="/admin-login">
                            Login as Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" to="/login">
                            Login as User
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    {/* <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink> */}
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <div className="btn-group mt-1">
                    <button
                      className="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="nav-link"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handelLogout}
                          className="nav-link"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
