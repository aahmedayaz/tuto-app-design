import React, { useEffect, useState } from 'react'
import SignInSplash from './SignIn/SignInSplash';
import logoLowerPart from '../assets/splashScreen/logo-lower-part.png'
import logoUpperPart from '../assets/splashScreen/logo-upper-part.png'
import tutorlaLogo from '../assets/splashScreen/tutorla-logo.png'

const SplashScreen = () => {
  
  let [firstSplashScreen, setFirstSplashScreen] = useState(true);
  let [secondSplashScreen, setSecondSplashScreen] = useState(false);
  
  useEffect(() => {
    const firsttimeoutId = setTimeout(() => {
        setFirstSplashScreen(false)
    }, 800)

    const secondtimeoutId = setTimeout(() => {
        setSecondSplashScreen(true)
    }, 2500)

    return(() => {
        clearTimeout(firsttimeoutId)
        clearTimeout(secondtimeoutId)
    })
  })
    
  return (
    <>
        <div className='w-max-[420px] h-[100vh]'>
          <div className="w-full h-[100vh] bg-[#FF3B18] flex flex-col justify-center items-center gap-[10px]" >
              {
                  secondSplashScreen ? <SignInSplash/>
                  : 
                  firstSplashScreen ? 
                  <>
                    <img src={logoUpperPart} alt="upper-part" className='w-[95px]'/>
                    <img src={logoLowerPart} alt="lower-part" className='w-[95px]'/>
                  </>
                  :
                  <img src={tutorlaLogo} alt="" className='w-[280px]'/>
              }
          </div>
        </div>
    </>
  )
}

export default SplashScreen