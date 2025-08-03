import mongoose from "mongoose";

const chaptersSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    pdfUrl:String,
})

const subjectSchema = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true,
    },
    className:{
        type:String,
        required:true
    },
    imageUrl:String,
    chapters:[chaptersSchema]
})

let subjectModel = mongoose.model('Subject',subjectSchema)

export default subjectModel