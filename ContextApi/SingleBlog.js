import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { blogcontext } from './Context'

function SingleBlog() {
    const { blog } = useContext(blogcontext)
    const { id } = useParams()

    const post = blog.filter(post => post.id === parseInt(id))[0];

    if (!post) {
      return <div>Loading...</div>
    }
    
    return (
      <div>
        <p>{post.body}</p>
        <h3>{post.title}</h3>
      </div>
    )
    
}

export default SingleBlog
