import { cloudinary } from "../config/cloudinary";
import subjectModel from "../models/subject.model";
import path from 'path';
import fs from "fs";

export const addSubject = async (req, res) => {
    try {
        let { subjectName, className } = req.body
        const filePath = path.join(__dirname, '..', req.file.path);

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'subject_images',
            allowed_formats: ['jpg', 'png', 'jpeg'],
            transformation: [{ width: 200, height: 200, crop: 'limit' }]
        })

        fs.unlinkSync(filePath)

        const newSubject = new subjectModel({
            subjectName,
            className,
            imageUrl: result.secure_url
        })

        const subjectSave = await newSubject.save();
        res.status(200).json(subjectSave)
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}

export const addChapter = async (req, res) => {
    try {
        const { title } = req.body;
        const subjectId = req.param.id
        const filePath = path.join(__dirname, '..', req.file.path)

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'raw', // required for non-image files like PDFs
            folder: 'chapter_pdfs'
        });

        // Optional: delete local file
        fs.unlinkSync(filePath);


        const subject = await subjectModel.findById(subjectId);
        if (!subject) {
            res.status(404).json({ message: 'Subject not found' })
        }
        subject.chapters.push({
            title,
            pdfUrl: result.secure_url
        })
        await subject.save();
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: 'server error', error })
    }


}