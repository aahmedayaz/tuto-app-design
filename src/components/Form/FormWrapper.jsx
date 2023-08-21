import React from 'react'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import ExtraText from './ExtraText';

const FormWrapper = ({heading, description, children, info, direct}) => {
  return (
    <>
        <div className='bg-[#ffffff] w-full h-[100%] absolute flex flex-col justify-center items-center'>
            <div className='w-[90%] bg-[#E4EDFF] rounded-[20px] flex flex-col justify-center items-center relative pb-[90px] pt-[40px]'>
                <h1 className='text-4xl font-bold text-[#034BD9] mb-[10px]'>{heading}</h1>
                <p className='text-sm'>{description}</p>
                <form action="" className='w-full px-[30px]'>
                    {children}  
                </form>
                <ExtraText description={info} direct={direct}/>
                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-[50%] absolute bottom-[-45px] left-[60px] border-[1px] bg-[#BFD7FF] hover:bg-[#ff4c4c]  border-[none] cursor-pointer'>
                    <FaGoogle className='text-[#ffffff] text-3xl bg'/>
                </div>
                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-[50%] absolute bottom-[-45px] right-[60px] border-[1px] bg-[#BFD7FF] hover:bg-[#4c5eff] border-[none] cursor-pointer'>
                    <FaFacebookF className='text-[#ffffff] text-3xl'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormWrapper