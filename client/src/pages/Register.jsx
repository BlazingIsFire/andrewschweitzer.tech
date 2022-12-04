import '../App.css';
import './RegisterPage.css';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOutOfService = () =>{
        alert('Sorry, this service is temporarily unavailable. Please check back soon!');
    }

    return(
        <>
        <div className='register-page-container'>
            <div className='register-page-box'>
                <h1>Register:</h1>
                <form onSubmit={handleOutOfService}>
                    <input className='register-form-input' id='register-email' type='email' placeholder='Email Address' value={email} name='email' onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor='email' id='register-email-label'>Email Address</label>

                    <input className='register-form-input' id='register-password' type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor='password' id='register-password-label'>Password</label>

                    <input className='register-form-input' id='register-confirmPassword' type='password' placeholder='Confirm password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    <label htmlFor='confirmPassword' id='register-confirmPassword-label'>Confirm Password</label>

                    <input className='register-form-submit-btn' type='submit' value='Register Now' />
                    <h5>NOTE: Register is still currently in development.</h5>
                </form>
            </div>
        </div>
        </>
    )
}

export default Register;