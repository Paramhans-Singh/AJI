import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import '../styles/AuthenticationPage.css'

const AuthenticationPage = () => {
    const [loginContainer,setLoginContainer]= useState(false);

  return (
    <div className='authenticationPage'>
        <div className={loginContainer ? "authenticationPage-container":"authenticationPage-container opposite"}>
                { loginContainer ? <Login actions={setLoginContainer}/> : <Signup actions={setLoginContainer}/>}
        </div>
    </div>
  )
}

export default AuthenticationPage
