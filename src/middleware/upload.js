import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file , cb) {
        cd(null, "uploads/");
    },
    filename: function (req, file ,cb) {
        cd(null, file.originalname);
    }
});

const uploads = multer({ storage: storage});

export default uploads;