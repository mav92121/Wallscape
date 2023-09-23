/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/
import React from "react";
import Board from "./Board";
export default function Boards(prop) {

  let filteredBoards = prop.boards.filter(board =>{
      
    if(board.title===''){
        return board.title;
    }
    else{
        return  board.title.toLowerCase().includes(prop.searchQuery);
      
    }

  });

  let boards = filteredBoards.map((board_item) => (
    <Board
      color={board_item.color}
      title={board_item.title}
      id={board_item.id}
      key={board_item.id}
      removeBoard={prop.removeBoard}
      updateBoard={prop.updateBoard}
    />
  ));

  return (
    <div className="boards">{boards}</div>
  )
}
