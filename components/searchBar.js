import React, { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState([]);

  const fetchData = (value) => {
    fetch('url').then((response) => response.json()).then((json) => {
      const results = json.filter((user) => value && user && user.name && user.name.toLowerCase().includes(value));
      console.warn(results);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        placeholder="Search Tours"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
