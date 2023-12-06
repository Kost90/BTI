const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
const {connectToDb, getDb} = require('./db');
// const { get } = require('http');


const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
  })

  let db;

  connectToDb((err) => {
    if(!err){
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
          });
          db = getDb();
    }else{
        console.log(`DB connection error: ${err}`)
    }
  })


 