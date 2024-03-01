import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import rootRoute from './routes/rootRoute.js';
import sequelize from './connect.js';

const port = 8080
const app = express();
app.listen(port, ()=>console.log(`Server starts at port ${port}`))
app.use(cors());
app.use(express.json())

app.use(rootRoute);
