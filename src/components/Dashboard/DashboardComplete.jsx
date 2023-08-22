import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import MonthlySummary from './MonthlySummary/MonthlySummary'
import Banner from '../../assets/dashboard/Banner-image.png'
import ClassBox from './ClassBox/ClassBox'

const DashboardComplete = () => {
    return (
        <>
          <Wrapper bottomNavigation={true} onDashboard={true}>
            <img src={Banner} alt="" className='px-[18px]'/>
            <MonthlySummary month="September" AttendedHours="00:00" ScheduledHours="00:00" TutorRating={0.0}  ActiveStudents={0}/>
            <h3 className='px-[25px] text-xl font-bold text-[#034BD9] mb-[10px]'>On Going Class</h3>
            <ClassBox/>
          </Wrapper>
        </>
      )
}

export default DashboardComplete