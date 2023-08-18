import React, { useEffect, useState } from 'react'
import { BsFillCircleFill } from "react-icons/bs";
import Lottie from 'lottie-react'
import animationData from '../../assets/animation.json'
import ballwave from '../../assets/ball-wave.json'
import FormWrapper from '../Form/FormWrapper';
import SignIn from '../Form/SignIn';

const SignInSplash = () => {

    let [showSignIn, setShowSignIn] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowSignIn(true);
        }, 2000)
    })

    return (
        <>
            <div className='w-[100%] h-[100vh] bg-[#ffffff] flex flex-col justify-center gap-[50px] items-center relative overflow-hidden'>
                {
                    showSignIn ? 
                    <FormWrapper heading='Sign In' description='Sign In with your Information'>
                        <SignIn/>
                    </FormWrapper>
                    :
                    <>
                        <BsFillCircleFill className='text-[#23c76d] absolute top-[-75px] right-[-75px] z-10 w-[190px] h-max'/>
                        <Lottie animationData={animationData} loop={true} className='w-[300px]' />
                        <h1 className='text-4xl font-bold text-blue-500'>Sign In</h1>
                        <Lottie animationData={ballwave} loop={true} className='mt-[-100px]'/>
                        <BsFillCircleFill className='text-[#e4ff49] absolute bottom-[-75px] left-[-75px] z-10 w-[190px] h-max'/>
                    </>
                }
            </div>
        </>
  )
}

export default SignInSplash