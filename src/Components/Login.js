import React, { useContext } from 'react'
import './Login.css'
import { useState } from 'react'
import { FirebaseContext } from '../store/FirebaseContext'

import {
    db,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "../firebase/Config";


function Login() {
 
  const [username, setUsername] = useState('')
  
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {fireContext} = useContext(FirebaseContext)
  
  const signIn=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in;
        userCredential.users.updateProfile({displayName:username})
    })
    .catch((error) => {
        alert(error.message);
    });

  }
 



  return (
    <div className='login-main'>
      <div className='login-center-div'>
        <img className='olx-clr-logo' src="./IMAGES/olx-logo-13.png" alt="" />
        <form className='login-form' >
          <label>Username</label><br />
            <input type="text" placeholder='Username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <br />
          
          <label>Email</label><br />
            <input type="Email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
          
          <label>Phone</label><br />
            <input type="Phone" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <br />
          <label>Password</label><br />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          
        </form>
        <button  type='submit' className='sign-up' onClick={signIn}>Signup</button><br />
        <button className='login'>Login</button>
      </div>
     
    </div>
  )
}

export default Login
