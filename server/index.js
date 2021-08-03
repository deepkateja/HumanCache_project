import express from 'express';
// const bodyParser = require('body-parser');
// const express = require('express');
 import bodyParser from 'body-parser';
 import mongoose from 'mongoose';
 import cors from 'cors';
 import dotenv from 'dotenv';
// const mongoose = require('mongoose');
// const cors = require('cors');
//const postRoutes = require('./routes/posts.js') ;
import postRoutes from './routes/posts.js';
import userRouter from './routes/users.js';

 const app = express();
 dotenv.config();
 
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts',postRoutes);
app.use("/user", userRouter);

app.get('/',(req,res)=>{
  res.send('Welcome to HumanCache API');
});
//const CONNECTION_URL = 'mongodb+srv://HumanCache:HumanCache123@cluster0.m6pb0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //Booleans Ensures no warning in console
  .then(() => app.listen(process.env.PORT|| 5000, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);