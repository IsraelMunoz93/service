let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    gender:String,
    phone:String,
    create_date:{
        type: Date,
        default:Date.now
    }
});

let User = module.exports = mongoose.model('person',userSchema);

module.exports.get = (callback,limit)=>{
    User.find(callback).limit(limit);
}