const mongoose = require ('mongoose');
const config = require('./config');
const app = require('./src/app');
const port = config.port||5000;

mongoose.connect('mongodb://localhost:27017/task-manager',{ useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>console.log('Task Management MongoDb Is Connected')).catch(
    (err)=>console.log('error is '+err));
app.listen(port,()=>{
    console.log('server is running on http://localhost:'+port);
})