const express = require('express');
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, null)
    },
    filename: (req, file, cb) => {
        cb(null, 
        `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

router.post('/register', upload.any(), usersController.save);