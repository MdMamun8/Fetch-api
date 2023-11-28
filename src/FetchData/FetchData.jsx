/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "../FetchData/useFetch";
import Post from "../Post/Post";
import "../FetchData/FetchData.css"
import Comment from "../Comments/Comment";
import Photo from "../Photos/Photo";
const FetchData = () => {
    // posts
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
//   comments
  const { data: comments, error: commentsError } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
//   photos
const { data: photos, error: photosError } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return (
    <div className="main">
        {/* posts */}
          <h1 className="main-heading">POSTS</h1>
    <div className="posts__container">
      {error
        ? error
        : data
            .slice(0, 20)
            .map((item, index) => <Post key={index} item={item} />)}
                </div>
                {/* comments */}
                <div className="comments-container">
                    <h1 className="comment-heading">COMMENTS</h1>
                    <div className="comment-container">
            {
                commentsError ? commentsError : comments.slice(0,20).map((item, index) => <Comment key={index} item = {item}/>)
            }
            </div>
    </div>
                {/* photos */}
    <div className="photos-container">
                    <h1 className="photos-heading">PHOTO</h1>
                    <div className="photo-container">
            {
                photosError ? photosError : photos.slice(0,20).map((item, index) => <Photo key={index} item = {item}/>)
            }
            </div>
    </div>
    </div>
  );
};

export default FetchData;
