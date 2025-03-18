const mongoose = require('mongoose');
const {DBConnection}= require('../config/connection');
const TaskSchema = new mongoose.Schema(
    {
        title :{type:String,require:true},
        description :{type:String, default:""},
        completed : {type:Boolean,default: false},      
    },
    { timestamps: true }
);
const task = DBConnection.model("Task",TaskSchema);
module.exports = task;