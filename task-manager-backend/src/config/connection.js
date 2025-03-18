const mongoose = require('mongoose');

const connection = (url)=>{

    const db = mongoose.createConnection(url,{ useNewUrlParser: true,
        useUnifiedTopology: true});
    db.on('error',function(error){console.log(error)});
    db.on('connected',function(){console.log('connected successfully')});
return db;
}
const DBConnection = connection('mongodb://localhost:27017/task-manager');
module.exports = {DBConnection};