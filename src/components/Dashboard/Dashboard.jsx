import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Banner from '../../assets/dashboard/Banner-image.png'
import MonthlySummary from './MonthlySummary/MonthlySummary'

const Dashboard = () => {
  return (
    <>
      <Wrapper bottomNavigation={true} onDashboard={true}>
        <img src={Banner} alt="" className='px-[18px]'/>
        <MonthlySummary month="September" AttendedHours="00:00" ScheduledHours="00:00" TutorRatings={0.0}  ActiveStudents={0}/>
      </Wrapper>
    </>
  )
}

export default Dashboard