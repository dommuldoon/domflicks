import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      onChange={e => onChange(e.currentTarget.value)}
      placeholder="Search..."
      value={value}
      className="form-control my-3"
    />
  );
};

export default SearchBox;
