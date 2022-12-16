const router = require("express").Router();
const apiController = require("../controllers/apiController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");

router.get("/", apiController.landingPage);
router.get("/category", apiController.category);
router.get("/stats", apiController.stats);
router.get("/testimonial", apiController.testimonial);
router.get("/detail/:id", apiController.detailPage);
router.post("/booking", uploadSingle, apiController.bookingPage);

module.exports = router;
