import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

console.log('process.env.API_KEY_CLOUDINARY',process.env.API_KEY_CLOUDINARY)

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY_CLOUDINARY,
    api_secret:process.env.API_SECRET_KEY_CLOUDINARY
})

export {cloudinary}