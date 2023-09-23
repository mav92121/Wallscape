/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import React from "react";

export default function UserPost(prop) {
    const[likes, setLikes] = React.useState(prop.likes);
    const[liked, setLiked] = React.useState(false);

    function likePost(){
        if(!liked){
            setLikes(prev => prev+1);
        }
        else{
            setLikes(prev => prev-1)
        }

        setLiked(prev => !prev);

    }
  return (
    <div className="post">
      <div className="post-header">
        <span className="post-title">{prop.title}</span>
        <div className="post-menu-bar">
          <div className="bookmark-post">
            <img src="bookmark.png" alt="" />
          </div>
          <div
            className="option-icon"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="options.png" alt="" />
          </div>
          <ul className="dropdown-menu" id="dropdown-menu">
            <li>
              <div
                className="dropdown-item"
                id="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img src="./edit.png" alt="" id="edit" />
                <span className="edit-text" id="dropdown-item-text">
                  Edit
                </span>
              </div>
            </li>

            <li>
              <div className="dropdown-item" id="dropdown-item">
                <img src="./delete.png" id="delete" alt="" />
                <span className="delete-text" id="dropdown-item-text">
                  Delete
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <span className="date">{prop.date}</span>
      <div className="cover-img">
        <img src={prop.image} alt="" />
      </div>
      <div className="post-description">{prop.description}</div>
      <div className="post-footer">
        <div className="like" onClick={likePost}>
          <img src={likes > 0 ?  "heart_filled.png" : "heart.png"} alt="" />
          <span className="like-count">{likes}</span>
        </div>
      </div>
    </div>
  );
}

