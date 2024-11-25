import React from 'react'
import { useState, useEffect } from 'react'
import Bloglistings from './Bloglistings';
import useFetch from './useFetch';

const Homepage = () => {

  const { data: blogs, loading, error } = useFetch('http://localhost:5000/blogs');
 
  return (
    <div className='Container'>
       {error && <p className='centre'>{ error }</p>}
       {loading && <p className='centre'>Loading resources...</p>}
       {blogs && <Bloglistings blogs={blogs}  title= "Read Latest"/>}
    </div>
  )
}

export default Homepage