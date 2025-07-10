import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import Button from '../button/button'
import FormInput from '../form-input/form-input'
import { useState } from 'react'
import './signIn-Form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {

    const logGoogleuser = async () => {

      await signInWithGooglePopup()
        
    }
    const [formFileds, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFileds
    // console.log(formFileds);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const {user} = await signInUserWithEmailAndPassword(email, password)

            resetFormFields();
        } catch (error) {
            if(error.code=='auth/invalid-credential')
            {
                alert('Invalid Email or password')
            }
            else{

                console.log('Error occured while user sign in', error);
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFileds, [name]: value })

    }
    return (
        <div>
            <h2>I alreadu have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type="email"
                    required
                    id='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    id='pasword'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <div className='SiginIn-form-buttons'>
                    <Button type='submit'>
                        SIGN IN
                    </Button>
                    <Button type='button' buttonType='google' onClick={logGoogleuser}>
                        Sign In with Google
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default SignInForm
