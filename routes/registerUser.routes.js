import express from 'express';
const router = express.Router()
import {userList, register, deleteUser, updateUser, login} from '../controllers/registerUser.controller.js'
import { verifyToken } from '../middleware/verifyToken.js';

router.get('/users', verifyToken ,userList)
router.post('/register',register)
router.post('/login',login)
router.delete('/users/:id', verifyToken,deleteUser)
router.put('/users/:id', verifyToken,updateUser)

export default router;
