import React from 'react'
import Sidebar from '../components/Sidebar';
import JudgeList from './JudgeList';
import '../styles/AdministratorDashboard.css'
import Scheduler from '../components/Scheduler';
import CalenderBox from '../components/CalenderBox';
import CaseContainer from './CaseContainer';


const AdministratorDashboard = () => {
  return (
    <div className='administratorDashboard'>
      <Sidebar/>
      {/* <JudgeList/> */}
      <CaseContainer/>
      {/* <div className='ScheduleBox'>
        <CalenderBox/>
        <Scheduler/>
      </div> */}
    </div>
  )
}

export default AdministratorDashboard