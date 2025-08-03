import mongoose from "mongoose";

let registerUserSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }
})

let registerUserModel = mongoose.model('registerUser',registerUserSchema)

export default registerUserModel;