import React, { useEffect, useRef } from "react";

const SearchBar = ({ setPosts, setLoading }) => {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://posthub-1-534i.onrender.com");

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPosts(data);
      setLoading(false);
    };

    return () => ws.current.close();
  }, []);

  const handleChange = (e) => {
    setLoading(true);
    ws.current.send(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="🔍 Search posts by title or content..."
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;