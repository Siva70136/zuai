// routes/blogPosts.js
const express = require('express');
const { BlogPost } = require('../models');
const router = express.Router();

// Get all blog posts
router.get('/', async (req, res) => {
    const posts = await BlogPost.findAll();
    res.json(posts);
});

// Get a specific post
router.get('/:id', async (req, res) => {
    const post = await BlogPost.findByPk(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Create a new post
router.post('/', async (req, res) => {
    const { title, excerpt, content } = req.body;
    if (!title || !excerpt || !content) {
        return res.status(400).send('All fields are required');
    }
    const post = await BlogPost.create({ title, excerpt, content });
    res.status(201).json(post);
});

// Update a post
router.put('/:id', async (req, res) => {
    const { title, excerpt, content } = req.body;
    const post = await BlogPost.findByPk(req.params.id);
    if (post) {
        post.title = title || post.title;
        post.excerpt = excerpt || post.excerpt;
        post.content = content || post.content;
        await post.save();
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete a post
router.delete('/:id', async (req, res) => {
    const post = await BlogPost.findByPk(req.params.id);
    if (post) {
        await post.destroy();
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

module.exports = router;
