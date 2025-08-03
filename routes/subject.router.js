import upload from '../middleware/uploadLocal.js';
import {addChapter, addSubject, getSubject} from '../controllers/subject.controller.js';
import express from 'express';

let routerSubject = express.Router();

routerSubject.post('/subject',upload.single('image'), addSubject)
routerSubject.post('/subject/:id/chapters', upload.single('pdf'), addChapter)
routerSubject.get('/subject', getSubject)

export default routerSubject