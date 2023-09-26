import React, { useState } from 'react'
import '../styles/Sidebar.css'

const Sidebar = ({dashboard,setDashboard,Availablity,setAvailablity,Schedule,setSchedule}) => {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <span className='header-name'>AJIN</span>
        </div>
        <div className='functionalities'>
            <div className={dashboard ? "functionality active" : "functionality"} onClick={()=>{
                setDashboard(!dashboard)
                setSchedule(false)
                setAvailablity(false)
            }}
            >
                <i class="fa-solid fa-house-chimney"></i>
                <span>Dashboard</span>
            </div>
            <div className={Availablity ? "functionality active" : "functionality"} onClick={()=>{
                setAvailablity(!Availablity)
                setSchedule(false)
                setDashboard(false)
            }}>
                <i class="fa-solid fa-clipboard"></i>
                <span>Check Availablity</span>
            </div>
            <div className={Schedule ? "functionality active" : "functionality"} onClick={()=>{
                setSchedule(!Schedule)
                setAvailablity(false)
                setDashboard(false)
            }}>
                <i class="fa-solid fa-calendar"></i>
                <span>Schedule Cases</span>
            </div>
            <div className='functionality'>
                <i class="fa-solid fa-user"></i>
                <span>Manage Users</span>
            </div>
            <div className='functionality'>
                <i class="fa-solid fa-file"></i>
                <span>History</span>
            </div>
        </div>
        <div className='others'>
            <div className='functionality'>
                <i class="fa-solid fa-bell"></i>
                <span>Notifications</span>
                <span className='notification-count'>2</span>
            </div>
            <div className='functionality'>
                <i class="fa-solid fa-cog"></i>
                <span>Settings</span>
            </div>
            <div className='functionality'>
                <i class="fa-solid fa-sign-out"></i>
                <span>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar