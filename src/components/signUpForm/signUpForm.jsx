import React, { use } from 'react'
import { useState  } from 'react'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input'
import './signup-form.styles.scss'
import Button from '../button/button'

const defaultFormFields={
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm = () => {
    const [formFileds,setFormFields]= useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFileds


    
    const resetFormFields=()=>
    {
        setFormFields(defaultFormFields)
    }
    const handleSubmit= async(event)=>{
        event.preventDefault()
        if(password!=confirmPassword)
        {
            alert("Your password doesn't matched")
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields();
        }catch(error)
        {
            if(error.code=='auth/email-already-in-use')
            {
                alert('Email already in use , cannot create user')
            }
            else{

                console.log('Error occured while user creation',error);
            }
        }
    }
    const handleChange=(event)=>
    {
        const {name,value}=event.target
        setFormFields({...formFileds,[name]:value})
        
    }
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
 
      <FormInput 
     label='Display Name'
      type="text" 
      required 
      id='DisplayName' 
      name='displayName' 
      onChange={handleChange} 
      value={displayName}
      /> 

      <FormInput 
      label='Email'
     
      type="email" 
      required 
      id='email' 
      name='email'  
      onChange={handleChange} 
      value={email}
      />
  
      <FormInput 
      label='Password'
    
      type="password" 
      required 
      id='pasword' 
      name='password'  
      onChange={handleChange} 
      value={password}
      />
      
      <FormInput 
      label='Confirm Password'
      
      type="password" 
      required 
      id='ConfirmPassword' 
      name='confirmPassword'  
      onChange={handleChange} 
      value={confirmPassword}
      />
      
 <Button type='submit'>Sign Up</Button>


      </form>
    </div>
  )
}

export default SignUpForm
