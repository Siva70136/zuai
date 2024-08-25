import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SideMenu from './sidemenu';
import './index.css'

function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        axios.get('https://zuai-1-c8tq.onrender.com/posts')
            .then(response => {
                //console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }

    const removeItem = (id) => {
        axios.delete(`https://zuai-1-c8tq.onrender.com/posts/${id}`)
            .then(response => {
                toast.success('Deleted Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",

                });
                getItems();
            })
            .catch(error => {
                console.error('There was an error fetching the posts!', error);
            });
    }
    //createdAt updatedAt

    return (
        <div className='home-container'>
            <SideMenu />
            <div>
                <h2>Blog Posts</h2>
                <ul className='items-container'>
                    {posts.map(post => (
                        <li key={post.id} className='item'>
                            <Link to={`/posts/${post.id}`} className='link'>
                                <img src="https://www.savemyexams.com/cdn-cgi/image/f=auto,width=828/https://cdn.savemyexams.com/images/articles/blog-placeholder-1.png" alt='img' className='image' />
                            </Link>
                            <div className='info'>
                                <h3 className='title'>{post.id}.&nbsp;{post.title}</h3>
                                <p className='ex'>{post.excerpt}</p>
                                <div className='delete-container'>
                                    <div className='times-container'>
                                        <p className=''>  {new Date(post.updatedAt).toLocaleTimeString('en-GB', {
                                            //day: '',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true,
                                        })} &nbsp;read
                                        </p>
                                        <p className='created'>  {new Date(post.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                        </p>
                                    </div>
                                    <MdDeleteOutline className='side-img' onClick={() => { removeItem(post.id) }} />
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
            <ToastContainer />
        </div>
    );
}

export default BlogList;
