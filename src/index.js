const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app  = express();
const users = require('../routes/users');
const auth = require('../routes/auth');
const Product = require('../routes/products');



if(app.get('env')==='development'){
    app.use(morgan('tiny'));
        console.log('Morgan was enabled...');
    }

mongoose.connect('mongodb://localhost:27017/wobot')
    .then(() => console.log('Connected too MongoDB...'))
    .catch(err => console.error('Could not connect to  the MongoDB...'));


app.use(express.json());
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/api/products',Product);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Connecting to the port ${port}....`);
});
