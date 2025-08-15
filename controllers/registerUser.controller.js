import registerUserModel from '../models/registerUser.model.js';
import bcrypt from 'bcryptjs';
import  jwt  from 'jsonwebtoken';


export const register = async(req, res) =>{
    let {username, email, password} = req.body
    try{
        const existingUser = await registerUserModel.findOne({email})
        if(existingUser){
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new registerUserModel({username, email, password:hashedPassword})
        await newUser.save();
        res.status(201).json({message:'User registration is successfull'})
    }catch(err){
        console.log('error in register user', err)
        res.status(500).json({message:'Server error'})
    }
}

export const login = async(req, res) =>{
    let {email, password} = req.body
    try{
        const isUser = await registerUserModel.findOne({email})
        if(!isUser){
            res.status(400).json({message:'User not found'})
        }
        const isMatch = await bcrypt.compare(password, isUser.password)
        if(!isMatch)return res.status(400).json({message:'Invalid user'})
        
        const token = jwt.sign({email}, process.env.JWT_SECRET_KEY,{expiresIn:'1h'})
        res.json({token})
        
    }catch(error){
        console.log(error)
        res.status(500).json({message:'Server error in login'})
    }
}

export const deleteUser = async(req, res) =>{
    try{
        const idToDelete = req.params.id
        console.log('idTodelete', idToDelete)
        const resDeleteUser = await registerUserModel.findByIdAndDelete(idToDelete)
        console.log('resDeleteUser',resDeleteUser)
         if (!resDeleteUser) {
            return res.status(404).json({ message: 'User not found' });
        }
         res.status(200).json({ message: 'User deleted successfully' });
    }catch(err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

export const updateUser = async(req, res) =>{
    try{
        const userId = req.params.id
        const {username, email} = req.body
        const resUpdateUser = await registerUserModel.findByIdAndUpdate(userId,{username, email}, { new: true, runValidators: true })
         if (!resUpdateUser) {
            return res.status(404).json({ message: 'User not found' });
        }
         res.status(200).json({ message: 'User updated successfully' });
    }catch(err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

export const userList = async(req, res) =>{
    try{
        const users = await registerUserModel.find({}, { password: 0 });
        res.json(users)
    }catch (error){
        console.log('error in get user list', error)
        res.status(500).json({message:'Server error'})
    }
}
