
/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/


import "./App.css";
import Navbar from "./Components/Navbar";
import Wall from "./Components/Wall";
import React from "react";
import NewBoardPopup from "./Components/New_Board_popup";
import { nanoid } from 'nanoid'
import EditBoardModal from "./Components/Edit_board_modal";
import Posts from "./Components/Posts";
import Board_Details from './Components/Board_Details';
import { useAppState } from "./UseAppState";

function App(prop) {

  const [boardArray, setBoardArray] = useAppState()
  
  const [idToUpdate, setIdToUpdate] = React.useState("");

  const [searchQuery, setSearchQuery] = React.useState("")

  const [formData, setFormData] = React.useState({
    title: "",
    color: "#A7F0F9",
    id: "",
    posts:{}
  })

  function addBoard() {
    let board_info = formData;

    setBoardArray((prevBoardArray) => {
      return [...prevBoardArray, board_info];
    });


    setFormData(prevFormData =>{
      return {color: "", title: "", id:""}
    })
  }

  function deleteBoard(id){
    setBoardArray(prevBoardArray => {
      return prevBoardArray.filter(board => {
        return board.id!==id
         
      })
    })
  }
  
  function updateBoard(id){
    setIdToUpdate(id);
  }


  function editBoard(id){
    let board_info = formData;

    setBoardArray((prevBoardArray) => {
      return prevBoardArray.map(board => {
        if(board.id === id){
          return board_info;
        }
        else{
          return board;
        }
      })
    });

    setFormData(prevFormData =>{
      return {color: "", title: "", id:""}
    })

  }

  return (
    
    <div>
      <Navbar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <Wall
      boards={boardArray}
      removeBoard={deleteBoard}
      updateBoard={updateBoard}
      searchQuery={searchQuery}
      />
      <NewBoardPopup
      BoardDetails={formData}
      setBoardDetails={setFormData}
      addNewBoard={addBoard}      
      />
      < EditBoardModal
      boards={boardArray}
      BoardDetails={formData}
      setBoardDetails={setFormData}
      idToUpdate={idToUpdate}
      BoardEdit={editBoard}
      />
    </div>
  );
}

export default App;
