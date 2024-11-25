import React from 'react';
import { useState } from 'react';
import{ useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Addblog = () => {

const [title, setTitle] = useState('');
const [body, setBody] =  useState('');
const [author, setAuthor] =  useState('Feyi Joy');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => {

   e.preventDefault();

   setLoading(true);

   const blog = {title, body, author};

   fetch('http://localhost:5000/blogs', {
     method: "POST",
     headers: {"Content-Type": "applicatiion/json"},
     body: JSON.stringify(blog)
   }).then(() => {
      setLoading(false);
      toast.success('Blog published successfully!');
   }).then(() => {
       navigate('/')
   })



}
  return (
    <>
      <div  className='Container'>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type='text'
              placeholder='include blog title...'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
            </input>
            <label>Blog Description:</label>
            <textarea
              placeholder='description...'
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
               <option value="Feyi Joy">Feyi Joy</option>
               <option value="Kelvin Nadia">Kelvin Nadia</option>
               <option value="Haminat Bashi">Haminat Bashi</option>
            </select>
            {!loading && <button>Publish Blog</button>}
            {loading && <button disabled>Publishing Blog...</button>}
          </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Addblog