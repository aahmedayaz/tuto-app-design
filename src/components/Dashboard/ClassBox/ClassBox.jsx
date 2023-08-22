import React from 'react'
import ClassDP from '../../../assets/dashboard/class-dp-image.png'
import CollapseArrow from '../../../assets/dashboard/collapse-arrow.png'

const ClassBox = ({classBoxType, allowCollapseArrow}) => {
  return (
    <>
        <div className='mx-[25px] flex justify-between items-center h-[60px] overflow-hidden pr-[10px] border border-[#505050bb] rounded-lg shadow-sm'>
            <div className='h-[100%] py-[5px] px-[8px]'>
                <img src={ClassDP} alt="Class DP" className='h-[100%]' />
            </div>
            <div className=''>
                <h3 className='text-[14px] font-minibold'>Saira ( SOU University )</h3>
                <div className='flex text-sm gap-[5px]'>
                    <span className='text-[12px]'>Class Attending Hour</span>
                    <span className='text-[#034BD9] font-bold text-[12px]'>00:45</span>
                </div>
            </div>
            {
                allowCollapseArrow ? 
                <>
                    <div className='bg-[#034BD9] w-[30px] h-[30px] rounded-[50%] flex justify-center items-center ml-auto'>
                        <img src={CollapseArrow} alt="Collapse Arrow" className='rotate-[-90deg] w-[50%] translate-y-[-1px]' />
                    </div>
                </>
                :
                <>
                    <div className='flex flex-col justify-start items-end mt-[-25px]'>
                        <span className='text-sm text-[#034BD9] font-bold'>Online</span>
                        <span className='text-[9px] text-[#414141]'>August 10th, 2023 / 09:00</span>
                    </div>
                </>
            }
        </div>
    </>
  )
}

export default ClassBox