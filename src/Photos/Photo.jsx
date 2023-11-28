/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Photo.css'
const Photo = ({item}) => {
    const {id, title, url} = item
  return (
    <div className='photos'>
        <div className="photo">
        <h1><span>ID : </span>{id}</h1>
        <h1><span>TITLE : </span>{title}</h1>
        <p><span>URL : </span>{url}</p>
        </div>
    </div>
  )
}

export default Photo