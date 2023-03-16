import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { blogcontext } from './Context'

function Aboutus() {
  const { blog } = useContext(blogcontext)
  return (
    <div className='aboutus'>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      {
        blog.map((element) => {
          if (element.id <= 3) {

            return (
              <div className='blog' key={element.id}>
                <h3><Link to={`/blog/${element.id}`} >{element.title}</Link></h3>
                <p>{element.body}</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Aboutus