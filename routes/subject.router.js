import upload from '../middleware/uploadLocal.js';
import {addChapter, addSubject} from '../controllers/subject.controller';
import express from 'express';

let router = express.Router();

router.post('/subject',upload.single('image'), addSubject)
router.post('/subject/:id/chapters', upload.single('pdf'), addChapter)

export default router