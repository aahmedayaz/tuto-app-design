import React from 'react'
import { Link } from 'react-router-dom'

const ExtraText = ({description, direct}) => {
  return (
    <>
        <div className='w-full text-center mt-[20px]'>
            <span className='text-sm'>{description} </span>
            <br></br>
            <Link className='text-sm font-bold cursor-pointer' to={direct === 'Create Account' ? '/signup' : '/signin'}> {direct}</Link>
            <div className='w-full relative text-center flex flex-col justify-center items-center'>
              <div className='w-[250px] bg-black h-[2px] mt-[20px]'></div>
              <span className='px-[20px] bg-[#E4EDFF] absolute bottom-[-10px]'> Or With </span>
            </div>
        </div>
    </>
  )
}

export default ExtraText