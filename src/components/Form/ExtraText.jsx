import React from 'react'

const ExtraText = ({description, direct}) => {
  return (
    <>
        <div className='w-full text-center mt-[80px]'>
            <span className='text-sm'>{description} </span>
            <span className='text-sm font-bold'> {direct}</span>
            <div className='w-full relative text-center flex flex-col justify-center items-center'>
              <div className='w-[250px] bg-black h-[2px] mt-[20px]'></div>
              <span className='px-[20px] bg-[#eeeeee] absolute bottom-[-10px]'> Or With </span>
            </div>
        </div>
    </>
  )
}

export default ExtraText