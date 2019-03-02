import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "fa fa-heart-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
