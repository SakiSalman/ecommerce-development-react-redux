import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>



      {/* Sidebar */}
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title"> 
            <span>Main</span>
          </li>
          <li className="active"> 
            <Link to="/"><i className="fe fe-home" /> <span>Dashboard</span></Link>
          </li>
          <li> 
            <NavLink to="/users"><i className="fe fe-users" /> <span>Users</span></NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  {/* /Sidebar */}
    
    
    </>
  )
}

export default Sidebar