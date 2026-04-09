import React, { useEffect, useRef } from "react";

const SearchBar = ({ setPosts, setLoading }) => {
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:5000");

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