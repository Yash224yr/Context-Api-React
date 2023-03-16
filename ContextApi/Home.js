import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { blogcontext } from './Context'

function Home() {

    
   const {blog} = useContext(blogcontext)
   

  return (
   <div className='all'>
        {
            blog.map((element)=>{
                return (
                    <div className='blogres' key={element.id}>
                        <h3><Link to={`/blog/${element.id}`} >{element.title}</Link></h3>
                        <p>{element.body}</p>
                    </div>
                )
            })
        }
   </div>
  )
}

export default Home