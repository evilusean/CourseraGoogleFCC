const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// Define the routes for posts
router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost); // Ensure this line is present

router
  .route("/:id")
  .get(postController.getOnePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;