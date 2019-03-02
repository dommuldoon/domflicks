import React from "react";

const Select = ({ name, label, error, ...rest }) => {
  return (
    // <div className="form-group">
    //   <label htmlFor={name}>{label}</label>
    //   <Select {...rest} name={name} id={name} className="form-control" />
    //   {error && <div className="alert alert-danger">{error}</div>}
    // </div>
    <div class="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" {...rest} name={name} id={name}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
