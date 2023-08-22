import React from 'react'
import DP from '../../assets/dashboard/DP.png'
import Hamburger from '../../assets/dashboard/hamburger.png'
import backArrow from '../../assets/dashboard/back-arrow.png'
import Home from '../../assets/dashboard/home-icon.png'
import Calender from '../../assets/dashboard/calendor-icon.png'
import Bag from '../../assets/dashboard/bag-icon.png'
import Student from '../../assets/dashboard/student-icon.png'

const Wrapper = ({bottomNavigation, onDashboard, children }) => {
  return (
    <>
        <div className='w-[100%] min-h-[100vh] overflow-hidden pt-[110px]'>
            <div className='w-[100%] top-0 fixed h-full '>
                <div className='w-[100%] h-[110px] flex items-center top-0 px-[25px] justify-between bg-[#fff]'>
                {
                    onDashboard ? 
                    <>
                        <div className='flex h-[100px] w-[100%] py-[25px] justify-start gap-[10px]'>
                            <img src={DP} alt="Profile" className=''/>
                            <span className='self-center text-[#034BD9] font-bold text-2xl'>Hi, Bella</span>
                        </div>
                        <img src={Hamburger} alt="Hamburger" className='w-[30px]'/>
                    </>
                    :
                    <>
                        <img src={backArrow} alt="back arrow" className='w-[30px]'/>
                        <h2 className='text-[#034BD9] font-bold text-3xl'>Support</h2>
                        <img src={Hamburger} alt="Hamburger" className='w-[30px]'/>
                    </>
                }
                </div>
            </div>
            {children}
            {
                bottomNavigation && 
                <div className='w-[100%] h-[70px] fixed bottom-0 flex bg-[#034BD9] px-[30px] justify-between py-[22px]'>
                    <img src={Home} alt="" />
                    <img src={Calender} alt="" />
                    <img src={Bag} alt="" />
                    <img src={Student} alt="" />
                </div>
            }
        </div>
    </>
  )
}

export default Wrapper