import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

app.use('/posts' , postRoutes);
app.use('/user' , userRoutes);


const CONNECTION_URL ='mongodb+srv://dunsingh2210:N0zQJvQMEAzTvIEz@cluster0.dmqv6mo.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT , () => console.log(`server is running on port : ${PORT}`)))
   .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);