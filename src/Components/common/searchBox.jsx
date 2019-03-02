import React from "react";

const SearchBox = props => {
  return (
    <div className="form-group">
      <input
        onChange={props.onChange}
        name="searchBox"
        id="searchBox"
        className="form-control"
      />
    </div>
  );
};

export default SearchBox;
