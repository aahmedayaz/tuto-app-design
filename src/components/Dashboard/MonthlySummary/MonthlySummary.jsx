import React from 'react'
import ActiveStudent from '../../../assets/monthlysummary/Active-Student-icon.png'
import AttendedHour from '../../../assets/monthlysummary/Attended-hour-icon.png'
import ScheduledHour from '../../../assets/monthlysummary/Scheduled-Hour-icon.png'
import TutorRatings from '../../../assets/monthlysummary/Tutor-Rating-icon.png'


const MonthlySummary = ({month, AttendedHours, ScheduledHours, ActiveStudents, TutorRating}) => {
  return (
    <>
        <div className='mx-[25px] px-[25px] py-[15px] bg-[#eeededb6]'>
            <h2 className='text-xl font-bold text-[#034BD9]'>Monthly Summary</h2>
            <span className='text-sm'>{month}</span>
            <div className='h-[75px] flex w-full mt-[15px]'>
                {/* Attended Hours */}
                <div className='flex gap-[10px] mr-[20px]'>
                    <img src={AttendedHour} alt="" className='h-[30px]'/>
                    <div className='flex flex-col'>
                        <span className="text-sm" >Attended Hours</span>
                        <span className="text-sm" >{AttendedHours}</span>
                    </div>  
                </div>

                {/* Active Students */}
                <div className='flex gap-[10px]'>
                    <img src={ActiveStudent} alt="" className='h-[30px]'/>
                    <div className='flex flex-col'>
                        <span className="text-sm" >Active Students</span>
                        <span className="text-sm" >{ActiveStudents}</span>
                    </div>  
                </div>
            </div>
            <div className='w-[100%] h-[75px] flex'>
                {/* Scheduled Hour */}
                <div className='flex gap-[10px] mr-[20px]'>
                    <img src={ScheduledHour} alt="" className='h-[30px]'/>
                    <div className='flex flex-col'>
                        <span className="text-sm" >Scheduled Hours</span>
                        <span className="text-sm" >{ScheduledHours}</span>
                    </div>  
                </div>

                {/* Tutor Rating */}
                <div className='flex gap-[10px]'>
                    <img src={TutorRatings} alt="" className='h-[30px]'/>
                    <div className='flex flex-col'>
                        <span className="text-sm" >Tutor Ratings</span>
                        <span className="text-sm" >{TutorRating}</span>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default MonthlySummary