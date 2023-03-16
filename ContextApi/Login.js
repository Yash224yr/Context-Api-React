import React, { useState } from 'react'
import Home from './Home'

function Login() {

    const [username, setusername] = useState("")
    const [checkpas, setcheck] = useState("")
    const [go, setgo] = useState(true)

    function handlelogin(e){
        e.preventDefault()
        const storedUserDetails = JSON.parse(localStorage.getItem("userdetails")) || [];
        const foundUser = storedUserDetails.filter(user => user.user === username && user.password === checkpas)[0];

        if(foundUser){
            alert("Login Successful")
            setgo(false)
        }
        else{
            alert("No User Found")
        }
    }
    if(go){
        return (
            <div className='loginform'>
                <form onSubmit={handlelogin}>
                    <input type="text" placeholder='Enter Username' onChange={(e)=>{setusername(e.target.value)}} ></input>
                    <input type="password" placeholder='Enter Password' onChange={(e)=>{setcheck(e.target.value)}}></input>
                    <button type='submit' >Login</button>
                </form>
            </div> )
    }
    else{
        return <Home/>
    }
  
   

}
export default Login;
