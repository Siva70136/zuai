import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from '../sidemenu';

import './index.css'

function EditForm() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/posts/${id}`, { title, excerpt, content })
            .then(response => {
                alert('Post Updated successfully!');
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
        </div>
    );
}

export default EditForm;
