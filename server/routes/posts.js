//const express = require('express');
import express from 'express';
// const getPosts = require('../controllers/posts.js');
// const createPost = require('../controllers/posts.js')
import{ getPosts,createPost} from '../controllers/posts.js';
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);

export default router;