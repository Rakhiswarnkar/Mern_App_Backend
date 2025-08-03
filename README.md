# mern_app

📌 Features
🧑‍💻 User Management APIs
Register a new user

Update user details

Delete user

Get all users

📚 Subject & Chapter Management
Add a new subject with a cover image

Get all subjects

Each subject contains chapters

Upload PDF files for each chapter

☁️ Image & File Uploads
Image uploads handled using Multer

Uploaded subject cover images are stored in Cloudinary

Chapter PDFs are also uploaded to Cloudinary (resource_type: 'raw')

🗃️ Database
All user, subject, and chapter data is stored in MongoDB Atlas

Managed using Mongoose schemas and models

🛠 Technologies Used
Node.js + Express.js

MongoDB Atlas + Mongoose

Multer (file handling middleware)

Cloudinary (image & file storage)

dotenv (for environment variable management)

