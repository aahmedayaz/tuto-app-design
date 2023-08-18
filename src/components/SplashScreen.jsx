import React, { useEffect, useState } from 'react'
import { FaFreeCodeCamp } from "react-icons/fa";
import SignInSplash from './SignIn/SignInSplash';

const SplashScreen = () => {
  
  let [firstSplashScreen, setFirstSplashScreen] = useState(true);
  let [secondSplashScreen, setSecondSplashScreen] = useState(false);
  
  useEffect(() => {
    const firsttimeoutId = setTimeout(() => {
        setFirstSplashScreen(false)
    }, 1300)

    const secondtimeoutId = setTimeout(() => {
        setSecondSplashScreen(true)
    }, 2000)

    return(() => {
        clearTimeout(firsttimeoutId)
        clearTimeout(secondtimeoutId)
    })
  })
    
  return (
    <>
        <div className='w-full h-[100vh] bg-[#ff5050] flex justify-center items-center'>
            {
                secondSplashScreen ? <SignInSplash/>
                : 
                firstSplashScreen ? <FaFreeCodeCamp className='text-[#ffffff] text-[150px]'/>
                :
                <h1 className='text-[80px] text-[#ffffff]'>Tutorla !</h1>
            }
        </div>
    </>
  )
}

export default SplashScreen