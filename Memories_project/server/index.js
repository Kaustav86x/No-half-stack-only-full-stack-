import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';
// const express = require('express'); 
const app = express(); 

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}));
app.use(cors());

const CONNECT_URL = 'mongodb+srv://CaptainK:CaptainK123@cluster0.nfuva4q.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.messege));

// mongoose.set('useFindAndModify', false);