import upload from '../middleware/uploadLocal.js';
import {addChapter, addSubject, getSubject} from '../controllers/subject.controller.js';
import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';

let routerSubject = express.Router();

routerSubject.use(verifyToken)
routerSubject.post('/subject',upload.single('image'), addSubject)
routerSubject.post('/subject/:id/chapters',upload.single('pdf'), addChapter)
routerSubject.get('/subject',getSubject)

export default routerSubject