const express = require("express");
const router = express.Router();

const {
  fetchAndSavePosts,
  getAllPosts,
  getSinglePost
} = require("../controllers/postController");

router.get("/fetch", fetchAndSavePosts);
router.get("/", getAllPosts);
router.get("/:id", getSinglePost);

module.exports = router;