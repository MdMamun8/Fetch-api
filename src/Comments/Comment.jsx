/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Comment.css'
const Comment = ({item}) => {
    const {id, name, email} =item
  return (
    <div className='comments'>
        <div className="comment">
        <h1><span>ID : </span>{id}</h1>
        <h1><span>NAME : </span>{name}</h1>
        <p><span>Email : </span>{email}</p>
        </div>
    </div>
  )
}

export default Comment