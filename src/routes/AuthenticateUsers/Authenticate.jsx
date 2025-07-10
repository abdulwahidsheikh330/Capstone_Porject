import React from 'react'
import SignUpForm from '../../components/signUpForm/signUpForm'
import SignInForm from '../../components/signInForm/signIn-Form'
import './Authenticate.scss'

const AuthenticateUser = () => {

  return (
    <div className='AuthenticateUser'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default AuthenticateUser
