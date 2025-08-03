import express from 'express';
const router = express.Router()
import {userList, register, deleteUser, updateUser} from '../controllers/registerUser.controller.js'

router.get('/users',userList)
router.post('/users/register', register)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router;
