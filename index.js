const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'*'
}));

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/react_node");
mongoose.connection.on('error', err => {
    console.log(err);
  });


const post_route = require('./routes/postRoute');
app.use('/api', post_route);

app.listen(8000,function(){
    console.log("server Running");
})