import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://posthub-1-534i.onrender.com")
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page">
      
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-icon">📦</div>
          <div>
            <h2>PostHub</h2>
            <p>Full-Stack Posts Explorer</p>
          </div>
        </div>

        <div className="status">
          🟢 Live
        </div>
      </div>

      {/* SEARCH */}
      <SearchBar setPosts={setPosts} setLoading={setLoading} />

      {/* COUNT */}
      <p className="count">{posts.length} posts</p>

      {/* POSTS */}
      <PostList posts={posts} loading={loading} />

    </div>
  );
};

export default App;