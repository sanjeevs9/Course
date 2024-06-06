const multer = require("multer");
const upload = multer();

const controller = require("../controller/courseController");

router.post("/upload", upload.single("image"), controller.upload);
