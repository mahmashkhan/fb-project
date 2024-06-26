const multer = require('multer');
// const express = require('express');
// const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './feeds');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    }
});


const upload = multer({ storage: storage });
upload.single('photo')

const feedPost = function (req, res) {

    const caption = req.body.caption;
    const photo = req.file;

    if (!photo) {
        res.status(400).json({ message: 'You must upload a photo' });
    } else {
        res.json({ message: caption, photo: photo.filename });
    }
};

module.exports = { feedPost, upload }