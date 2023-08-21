import React from 'react'
import SignUpForm from './SignUpForm'
import FormWrapper from './FormWrapper'

const SignUpPage = () => {
  return (
    <>
        <FormWrapper heading='Sign Up' description='Fill your Information' info="Already have an Account ?" direct="Sign In">
            <SignUpForm/>
        </FormWrapper>
    </>
  )
}

export default SignUpPage