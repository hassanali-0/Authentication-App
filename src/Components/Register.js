import React, { useState } from 'react'
import './Register.css'

export default function Register(props) {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handlePAsswordInput = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        if (confirmPassword !== "" && confirmPassword !== newPassword) {
            setConfirmPassword("")
        }
    }
    const handleConfirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value)
    }
    const togglePassword = (field) => {
        if (field === "password") {
            setShowPassword(!showPassword)
        }
        else if (field === "confirmPassword")
        setShowConfirmPassword(!showConfirmPassword)
    }
    let errorMessageClass = ["text-center", "error-message"]
    if(props.type) {
        errorMessageClass.push("text-success")
    }
    else {
        errorMessageClass.push("text-danger")
    }
  return (
    <>
    <div className="parent">
      <div className="child">
          <form action="" onSubmit={props.registerUser}>
              <h3 className='text-center login'>Sign Up</h3>
              <p className={errorMessageClass.join(" ")}>{props.message}</p>
              <label htmlFor="email" class="form-label">Email</label>
              <input type='email' class="form-control" id="email" placeholder="Email" name='email'></input>
              <label htmlFor="password" class="form-label">Password</label>
              {
                password && (

                    <i className={`fa-regular fa-eye${showPassword === true ? '-slash' : ''} show-password`} onClick={()=> togglePassword("password")}></i>
                )
              }
              <input type={showPassword ? 'text' : 'password'} class="form-control" id="password" placeholder="Password" value={password} onChange={handlePAsswordInput} name='password'></input>
              <label htmlFor="confirm-password" class="form-label">Confirm Password</label>
              {
                confirmPassword && (

                    <i className={`fa-regular fa-eye${showConfirmPassword === true ? '-slash' : ''} show-confirm-password`} onClick={()=> togglePassword("confirmPassword")}></i>
                )
              }
              <input type={showConfirmPassword ? 'text' : 'password'} class="form-control" id="confirm-password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordInput} name='confirmPassword'></input>
              <div className="control">
                    <div className="sign-in">
                        <a href='#' onClick={props.switch}>Sign In</a>
                    </div>
                </div>
              <button className='btn btn-primary login-btn'>Sign Up</button>
          </form>
          <div className="social">
            <div className="google">
                <button className='btn' onClick={props.googleRegistration}> <i className='fab fa-google'></i> Google </button>
            </div>
            <div className="apple">
                <button className='btn'> <i className='fab fa-apple'></i> Apple</button>
            </div>
            <div className="facebook">
                <button className='btn'> <i className='fab fa-facebook'></i> Faceook </button>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}
