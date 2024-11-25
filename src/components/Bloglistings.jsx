import React from 'react'
import  { Link } from 'react-router-dom';

const Bloglistings = ({ blogs, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <div className='blog-prev'>
                <h3>{blog.title}</h3>
                <p>Written by: {blog.author}</p>
              </div>
            </Link>
        ))}
    </>
  )
}

export default Bloglistings