import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from '../sidemenu';
import { ToastContainer, toast } from 'react-toastify';
import './index.css'

function BlogForm() {
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://zuai-1-c8tq.onrender.com/posts', { title, excerpt, content })
            .then(response => {
                toast.success('Post created Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });
                setTitle('');
                setExcerpt('');
                setContent('');
            })
            .catch(error => {
                console.error('There was an error creating the post!', error);
            });
    };

    return (
        <div className='home-container'>
            <SideMenu />
            <div className='create-form'>
                <form onSubmit={handleSubmit} >
                    <h2>Create a New Post</h2>
                    <div>
                        <label className='label'>Title</label> <br />
                        <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div>
                        <label className='label'>Excerpt</label><br />
                        <input type="text" className='input' value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
                    </div>
                    <div>
                        <label className='label'>Content</label><br />
                        <textarea value={content} className='input' onChange={(e) => setContent(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className='logout'>Create Post</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default BlogForm;
