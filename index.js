const mongoose = require('mongoose');
const express= require('express');
const app = express();
let bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
let apiRoutes = require('./api-routes');
let mongoDB = 'mongodb+srv://Israel:1234@cluster0-jzvin.mongodb.net/crudMean?retryWrites=true';

mongoose.connect(mongoDB, {useNewUrlParser: true})
    .then(db => console.log('Database is  connected'))
    .catch(err => console.log(err));



app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({
        extended:true
    }));

app.use('/api',apiRoutes);
app.get('/',(req,res) => res.send('Hello World'));
app.listen(port,()=>{
    console.log('Servidor corriendo' + port);
});




