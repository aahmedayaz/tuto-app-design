import React from 'react'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import ExtraText from './ExtraText';

const FormWrapper = ({heading, description, children}) => {
  return (
    <>
        <div className='bg-[#ffffff] w-full h-[100%] absolute flex flex-col justify-center items-center'>
            <div className='w-[80%] h-[600px] bg-[#eeeeee] rounded-[50px] flex flex-col justify-center items-center relative'>
                <h1 className='text-4xl font-bold text-[#000000] mb-[10px]'>{heading}</h1>
                <p className='text-sm'>{description}</p>
                <form action="" className='w-full px-[30px]'>
                    {children}
                </form>
                <ExtraText description="Don't have an Account?" direct='Create Account'/>
                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-[50%] absolute bottom-[-45px] left-[60px] border-[1px] bg-[#ff4c4c] border-[none]'>
                    <FaGoogle className='text-[#ffffff] text-3xl'/>
                </div>
                <div className='flex justify-center items-center w-[90px] h-[90px] rounded-[50%] absolute bottom-[-45px] left-[190px] border-[1px] bg-[#4c5eff] border-[none]'>
                    <FaFacebookF className='text-[#ffffff] text-3xl'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormWrapper