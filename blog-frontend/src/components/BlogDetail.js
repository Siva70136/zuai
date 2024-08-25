// src/components/BlogDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SideMenu from './sidemenu';

import './index.css'

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the post!', error);
            });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='home-container'>
            <SideMenu />
            <div className='details-container'>
                <h2 >{post.title}</h2>
                <p>{post.content}</p>
            </div>
        </div>
    );
}

export default BlogDetail;
