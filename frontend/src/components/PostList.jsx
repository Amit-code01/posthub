import React from "react";

// Fake realistic content generator
const generateRealContent = (id) => {
  const titles = [
    "How I Improved My Coding Skills in 30 Days",
    "Top 5 Mistakes Beginners Make in Programming",
    "Why Consistency Beats Motivation",
    "My Journey from College to Developer",
    "Best Resources to Learn Web Development",
    "How to Build Real Projects That Get You Hired",
    "Tips to Crack Your First Internship",
    "Frontend vs Backend: What Should You Choose?",
    "How I Built My First Full Stack App",
    "Daily Routine of a Productive Developer"
  ];

  const bodies = [
    "In this post, I share practical steps that helped me improve consistently and stay focused on my goals.",
    "Many beginners struggle with direction. Here are some mistakes you should avoid early in your journey.",
    "Motivation fades, but discipline keeps you moving forward. Here's how to build strong habits.",
    "From zero knowledge to building real-world projects, this journey taught me valuable lessons.",
    "If you're confused about where to start, these resources will save you time and effort.",
    "Projects are the best way to learn. Here's how you can build projects that stand out.",
    "Getting your first internship is tough, but these tips can increase your chances.",
    "Choosing between frontend and backend depends on your interests. Let's break it down.",
    "Building your first app is always exciting. Here's what I learned during the process.",
    "A structured daily routine can drastically improve your productivity."
  ];

  return {
    title: titles[id % titles.length],
    body: bodies[id % bodies.length]
  };
};

// Tag generator
const generateTags = (id) => {
  const tags = [
    ["#coding", "#learning"],
    ["#mistakes", "#beginners"],
    ["#motivation", "#discipline"],
    ["#journey", "#developer"],
    ["#resources", "#webdev"],
    ["#projects", "#career"],
    ["#internship", "#tips"],
    ["#frontend", "#backend"],
    ["#fullstack", "#build"],
    ["#productivity", "#routine"]
  ];

  return tags[id % tags.length];
};

const PostList = ({ posts, loading }) => {
  if (loading) return <p className="status-text">Loading posts...</p>;

  if (!posts.length) return <p className="status-text">No posts found.</p>;

  return (
    <div className="post-list">
      {posts.map(post => {
        const real = generateRealContent(post.id);
        const tags = generateTags(post.id);

        return (
          <div key={post.id} className="post-card">

            {/* Avatar */}
            <div className="avatar">👤</div>

            {/* Content */}
            <div className="post-content">

              <div className="meta">
                <span>#{post.id}</span>
                <span>·</span>
                <span>User {post.userId}</span>
              </div>

              <h3 className="title">{real.title}</h3>

              <p className="body">{real.body}</p>

              {/* TAGS */}
              <div className="tags">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default PostList;