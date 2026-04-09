const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();

const Post = require("./models/Post");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", require("./routes/postRoutes"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Create HTTP server
const server = http.createServer(app);

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", async (message) => {
    const query = message.toString().toLowerCase();

    const results = await Post.find({
      title: { $regex: query, $options: "i" }
    });

    ws.send(JSON.stringify(results));
  });

  ws.on("close", () => console.log("Client disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));