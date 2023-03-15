import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import "./Routing.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Blog from '../Routing/Blog'
import SingleBlog from './SingleBlog'
import Login from './Login'
import Register from './Register'
import Aboutus from './Aboutus'
import axios from 'axios'
export const blogcontext = createContext(null)

function Context() {
    const [blog, setblog] = useState([])
    const [form, setform] = useState([])


    useEffect(() => {
        async function getdata() {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setblog(response.data)
        }
        getdata()
    }, [])


    return (
        <blogcontext.Provider value={{blog, setblog, form, setform}}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path='/Blog/:id' element={<SingleBlog/>}>
                </Route>
                <Route path='/Login' element={<Login/>} >
                </Route>
                <Route path='/Register' element={<Register/>}>
                </Route>
                <Route path="/About" element={<Aboutus/>}>
                </Route>
            </Routes>
        </BrowserRouter>
        </blogcontext.Provider>
    )
}

export default Context