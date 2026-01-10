const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadpath = path.join(__dirname, "../uploads/Users");
if (!fs.existsSync(uploadpath)) {
  fs.mkdirSync(uploadpath);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadpath);
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const newname = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${extension}`;
    cb(null, newname);
  },
});
const uploads = multer({ storage });

module.exports = uploads;
