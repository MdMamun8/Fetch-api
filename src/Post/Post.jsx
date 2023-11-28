/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./post.css"
const Post = ({ item, error }) => {
  const { id, title } = item;
  console.log(item)
  return (
    <div className="all-api">
        
       <div className="single-post">
        <h1><span>ID : </span>{id}</h1>
        <h3><span>TITLE : </span>{title}</h3>
       </div>
    </div>
  );
};

export default Post;
