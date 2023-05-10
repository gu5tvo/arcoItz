import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads')
    }
});

const upload = multer({ storage });

export { upload, cloudinary };