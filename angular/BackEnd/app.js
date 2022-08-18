require('dotenv').config()
const express = require ('express');
const connectDB = require('./DB/connection');
const allRouter = require ('./Modules/AllRouter');
const app = express();
const cors = require("cors");
app.use(cors())
const port = process.env.PORT;

app.use(express.json());


app.use('/api/v1/user', allRouter.userRouter )
app.use('/api/v1/note', allRouter.noteRouter )




connectDB()
const server = app.listen (port, ()=>{

    console.log("running...");
})
