const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middlewares/not-found')
require('dotenv').config();

//middleware

app.use(express.json());

app.use(express.static('./public'))

//routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);

const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening to port ${port}`));
    }
    catch(error){
        console.log(error);
    }
}

start();


