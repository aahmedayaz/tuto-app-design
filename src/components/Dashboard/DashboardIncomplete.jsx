import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Banner from '../../assets/dashboard/Banner-image.png'
import MonthlySummary from './MonthlySummary/MonthlySummary'

const DashboardIncomplete = () => {
  return (
    <>
      <Wrapper bottomNavigation={true} onDashboard={true}>
        <img src={Banner} alt="" className='px-[18px]'/>
        <MonthlySummary month="September" AttendedHours="00:00" ScheduledHours="00:00" TutorRating={0.0}  ActiveStudents={0}/>
        <div className='mx-[25px] rounded-md h-[100px] bg-[#034BD9] py-[25px] relative'>
          <p className='w-[100%] text-center text-white font-bold text-md'>Your Profile in under review</p>
          <p className='w-[100%] text-center text-white font-bold text-md'>Please Complete your Profile</p>
          <button className='bg-[#6C9EFF] text-center text-white w-[70%] py-[5px] ml-[50%] mt-2 translate-x-[-50%] rounded-md'>Complete Now</button>
        </div>
      </Wrapper>
    </>
  )
}

export default DashboardIncomplete