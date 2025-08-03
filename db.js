// db.js
import { connect } from 'mongoose';
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async() =>{
    try{
        await connect(MONGO_URI);
        console.log('mongodbconnect')
    }catch (error){
        console.log(error)
        process.exit(1)
    }
    
}

export default connectDB;
