import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bloglisting = () => {

    const { id } = useParams();

    const { data: blog, loading, error } = useFetch('http://localhost:5000/blogs/' + id);

    const navigate = useNavigate();

    const handleDelete = () => {

      fetch('http://localhost:5000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        toast.success('Blog deleted successfully!');
        setTimeout(() => navigate('/'), 3000);
      })
    }
    
    let intro;

   const [fulldetails, setFulldetails] = useState(false);

   if(!fulldetails){
     intro = blog && blog.body.substring(0, 350) + '...';
   }else{
     intro = blog && blog.body;
   }


  return (
    <>
      {error && <p className='centre'>{ error }</p>}
      {loading && <p className='centre'>Loading resources...</p>}
      {blog && (
                
                  <div className='Container' key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <i>Written by: { blog.author }</i>
                    <p>{ intro }</p>
                    <div 
                    onClick={() => setFulldetails((prev) => !prev)}
                    className='read'
                    >{fulldetails ? 'read less' : 'read more'}</div>
                    <button onClick={handleDelete}>Delete</button>
                   </div>
      
          )}
        <ToastContainer />
    </>
  )
}

export default Bloglisting