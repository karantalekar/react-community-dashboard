import React from "react";

const Searchbar = ({ onChange }) => {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search members..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Searchbar;
