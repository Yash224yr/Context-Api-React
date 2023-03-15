import React, { useState } from 'react'

function Login() {

    const [username, setusername] = useState("")
    const [checkpas, setcheck] = useState("")

    function handlelogin(e){
        e.preventDefault()
        const storedata = JSON.parse(localStorage.getItem("userdetails"))
        if(storedata.userdetails.user=== username && storedata.userdetails.password === checkpas){
            alert("login Successfully")
        }
        else{
            alert("No User found")
        }
    }

  return (
    <div className='loginform'>
        <form onSubmit={handlelogin}>
            <input type="text" placeholder='Enter Username' onChange={(e)=>{setusername(e.target.value)}} ></input>
            <input type="password" placeholder='Enter Password' onChange={(e)=>{setcheck(e.target.value)}}></input>
            <button type='submit' >Login</button>
        </form>

    </div>
  )
}

export default Login