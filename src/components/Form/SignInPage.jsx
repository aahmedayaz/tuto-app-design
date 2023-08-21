import React from 'react'
import FormWrapper from './FormWrapper'
import SignInForm from './SignInForm'

const SignInPage = () => {
  return (
    <>
        <FormWrapper heading='Sign In' description='Sign In with your Information' info="Don't have an Account ?" direct="Create Account">
            <SignInForm/>
        </FormWrapper>
    </>
  )
}

export default SignInPage