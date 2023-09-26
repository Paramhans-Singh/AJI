import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import JudgeList from './JudgeList';
import '../styles/AdministratorDashboard.css'
import Scheduler from '../components/Scheduler';
import CalenderBox from '../components/CalenderBox';
import CaseContainer from './CaseContainer';


const AdministratorDashboard = () => {
  const [dashboard, setDashboard] = useState(true)
  const [Availablity, setAvailablity] = useState(false)
    const [Schedule, setSchedule] = useState(false)
    const actions = {
      dashboard:dashboard,
      setDashboard,
      Availablity:Availablity, 
      setAvailablity, 
      Schedule:Schedule, 
      setSchedule
    }
  return (
    <div className='administratorDashboard'>
      <Sidebar {...actions}/>
      {Schedule && 
        <CaseContainer/>
      }
      {Availablity && <>
      <JudgeList/>
      <div className='ScheduleBox'>
        <Scheduler/>
      </div>
      </>
      }
    </div>
  )
}

export default AdministratorDashboard