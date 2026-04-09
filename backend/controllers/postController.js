const axios = require("axios");
const Post = require("../models/Post");

// Fetch & store posts
exports.fetchAndSavePosts = async (req, res) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

    await Post.deleteMany(); // avoid duplicates
    await Post.insertMany(data);

    res.json({ message: "Posts fetched and saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single post
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findOne({ id: req.params.id });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};