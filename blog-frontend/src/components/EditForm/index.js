import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SideMenu from '../sidemenu';

import './index.css'

function EditForm() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://zuai-1-c8tq.onrender.com/posts/${id}`, { title, excerpt, content })
            .then(response => {
                toast.success('Post Updated Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });
                setId('');
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
            <div className='create-form edit-form'>
                <form onSubmit={handleSubmit} >
                    <h2>Edit a Post</h2>
                    <div>
                        <label className='label'>Id</label> <br />
                        <input type="text" className='input' value={id} onChange={(e) => setId(e.target.value)} required />
                    </div>
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
                    <button type="submit" className='logout'>Update Post</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditForm;
