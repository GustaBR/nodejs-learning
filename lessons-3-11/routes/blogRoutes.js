const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.blogIndex);
router.get("/create", blogController.blogCreateGet);
router.post("/", blogController.blogCreatePost);
router.get("/:id", blogController.blogDetails);
router.delete("/:id", blogController.blogDelete);

module.exports = router;