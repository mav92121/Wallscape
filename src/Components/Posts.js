/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import { Link, useParams } from "react-router-dom";
import { useAppState } from "../UseAppState";
import UserPost from "./UserPost";

export default function Posts() {
  let {id} = useParams();
  console.log("This is params", id);

  const [boardArray, setBoardArray] = useAppState();

  let posts_array;
  let board_name;
  for(let board of boardArray){
    console.log("Current board id : ", board['id']);
    if(board['id'] === id){
      // console.log("Found matching board ID:", board.id);
      board_name = board.title;
      posts_array = board.posts;
    }
  }
  let user_posts;
  if(typeof posts_array !== 'undefined'){
    user_posts = posts_array.map(post =>(
      <UserPost 
        title={post.title}
        date={post.date}
        description={post.description}
        likes={post.likes}
        image={post.image}
        boardArray={boardArray}
        setBoardArray={setBoardArray}
        id={id}
      />
    ))
  }
  else{
    user_posts = <p>Nothing here yet</p>
  }
  
  return (
    <div className="post-screen">
      <div className="navbar">
        <div className="left-arrow">
          <Link to="/" element="<App />">
            <img src="./left-arrow.png" alt="" />
          </Link>
        </div>
        <div className="logo-page-2">
          <img src="./toddle_mini_logo.jpg" alt="" />
        </div>

        <span className="board-name"> {board_name} </span>

        <div className="control-access">
          <img src="search_icon.png" id="control-search" alt="" />
          <span className="pipe">|</span>
          <img src="bookmark.png" alt="" id="control-bookmark" />
        </div>
      </div>

      <div className="button-container">
        <div className="create-new-board-button">
          <img src="plus.png" alt="" />
          <span className="button-text">Create new post</span>
        </div>
      </div>

      <div className="post-container">

        {user_posts}
        
      </div>
    </div>
  );
}
