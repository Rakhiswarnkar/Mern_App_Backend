import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY_CLOUDINARY,
    api_secret:process.env.API_SECRET_KEY_CLOUDINARY
})

export const storageImages = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'subject_images',
        allowed_formats:['jpg','png','jpeg'],
        transformation:[{width:200,height:200, crop:'limit'}]
    }
})

export const storageFile = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'chapter_pdf',
        allowed_format:['pdf'],
        resource_type:'raw',
    }
})

export {cloudinary}