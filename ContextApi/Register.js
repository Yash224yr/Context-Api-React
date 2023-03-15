import React, { useContext, useEffect, useState, } from 'react'
import { blogcontext  } from './Context'

function Register() {
    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [user , setuser] = useState("")
    const [password , setpassword] = useState("")
    const {form , setform} = useContext(blogcontext)

    useEffect(()=>{
        localStorage.setItem("userdetails",JSON.stringify(form))
    },[form])

    function handlesubmit(e){
        e.preventDefault()
        const userdetails = {
            name: name,
            email : email,
            user: user,
            password : password
        }
        setform({...form, userdetails})
    }


  return (
    <div className='registerform'>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Enter Your Name' onChange={(e)=>{setname(e.target.value)}} value={name} ></input>
            <input type="email" placeholder='Enter Your Email'onChange={(e)=>{setemail(e.target.value)}}  value={email}></input>
            <input type="text" placeholder='Enter Username' onChange={(e)=>{setuser(e.target.value)}} value={user}></input>
            <input type="password" placeholder='Enter Password' onChange={(e)=>{setpassword(e.target.value)}} value={password}></input>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register