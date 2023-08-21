import React, { useEffect, useState } from 'react'
import dot from '../../assets/sign-in/dot-1.png'
import splashSignInImage from '../../assets/sign-in/splash-sign-in-image.png'

import { ThreeDots } from  'react-loader-spinner'
import SignInPage from '../Form/SignInPage';

const SignInSplash = () => {

    let [showSignIn, setShowSignIn] = useState(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setShowSignIn(true);
        }, 3000)

        return (() => {
            clearTimeout(timeoutID)
        })
    })

    return (
        <>
            <div className={`w-[100%] h-[100vh] bg-[#ffffff] flex flex-col gap-[50px] items-center relative overflow-hidden1 ${showSignIn === false ? 'p-[40px] justify-start' : 'justify-center' }`} >
                {
                    showSignIn ? 
                    <SignInPage/>
                    :
                    <>
                        <img src={dot} alt="dot" className='absolute top-[40px] right-[60px] w-[30px]'/>
                        <img src={splashSignInImage} alt="there is design above the sign in" className='w-full mt-[90px]'/>
                        <img src={dot} alt="dot" className='absolute top-[200px] left-[30px] w-[15px]'/>
                        <h3 className='text-4xl text-[#033cd9] font-bold mt-[30px]'>Sign In</h3>
                        {/* Space for Animation */}
                        <ThreeDots 
                            height="80" 
                            width="80" 
                            radius="9"
                            color="#585858" 
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{marginTop: "-40px"}}
                            wrapperClassName=""
                            visible={true}
                            />
                        <img src={dot} alt="dot" className='absolute bottom-[-25px] left-[-25px]'/>
                    </>
                }
            </div>
        </>
  )
}

export default SignInSplash