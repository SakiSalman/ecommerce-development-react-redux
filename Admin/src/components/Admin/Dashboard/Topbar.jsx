import React from 'react'
import { useState } from 'react'
import Avatar from '../Profile/Avatar'
import BlackLogo from '../../Logo/BloackLogo'
import { useRef } from 'react'
import useshowHideDrops from '../../../hooks/showHideDrops'

const Topbar = () => {

  const {isOpen, toggleMenu, dropRef} = useshowHideDrops()
  const {isOpen:isNotification, toggleMenu:togoleNotification, dropRef:notificationRef} = useshowHideDrops()

  const userMenu = useRef(null)
  const [dropDown, setDropDown] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  return (
    <>

<div className="header">
    {/* Logo */}
    <div className="header-left">
      <a href="index.html" className="logo">
      <BlackLogo></BlackLogo>
      </a>
      <a href="index.html" className="logo logo-small">
      <BlackLogo style={{
        width :'30px', height : '30px' 
       }}></BlackLogo>
      </a>
    </div>
    {/* /Logo */}
    <a href="javascript:void(0);" id="toggle_btn">
      <i className="fe fe-text-align-left" />
    </a>
    <div className="top-nav-search">
      <form>
        <input type="text" className="form-control" placeholder="Search here" />
        <button className="btn" type="submit"><i className="fa fa-search" /></button>
      </form>
    </div>
    {/* Mobile Menu Toggle */}
    <a className="mobile_btn" id="mobile_btn">
      <i className="fa fa-bars" />
    </a>
    {/* /Mobile Menu Toggle */}
    {/* Header Right Menu */}
    <ul className="nav user-menu">
      {/* Notifications */}
      <li className="nav-item dropdown noti-dropdown" onClick={togoleNotification} ref={notificationRef}>
        <a href="#" className="dropdown-toggle nav-link" 
         >
          <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
        </a>
       {
        isNotification &&  <div style={{left : '-280px'}} className="dropdown-menu notifications show">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Notifications</span>
          <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                   
                  <Avatar clist={'avatar-img rounded-circle'} alt={'User Image'}></Avatar>
                  
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient1.jpg" />
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="#">View all Notifications</a>
        </div>
      </div>
       }
      </li>
      {/* /Notifications */}


      {/* User Menu */}
      <li className="nav-item dropdown has-arrow"  ref={dropRef}>
        <a href="#" className="dropdown-toggle nav-link"
        //  data-toggle="dropdown" 
         onClick={toggleMenu}>
          <span className="user-img">        
            
            <Avatar style={{width : '31px', height : '31px', objectFit : 'cover'}} clist={'rounded-circle'}></Avatar>
            </span>
        </a>

        {
          isOpen && <div style={{left : '-150px'}} className={ isOpen ? "dropdown-menu  show" : 'dropdown-menu'}>
          <div className="user-header">
            <div className="avatar avatar-sm">
              <Avatar clist={'avatar-img rounded-circle'}/>
            </div>
            <div className="user-text">
              <h6>Ryan Taylor</h6>
              <p className="text-muted mb-0">Administrator</p>
            </div>
          </div>
          <a className="dropdown-item" href="profile.html">My Profile</a>
          <a className="dropdown-item" href="settings.html">Settings</a>
          <a className="dropdown-item" href="login.html">Logout</a>
        </div>
        }
        
      </li>
      {/* /User Menu */}
    </ul>
    {/* /Header Right Menu */}
  </div>
    
    
    </>
  )
}

export default Topbar