/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import Boards from "./Boards";
function Wall(prop) {
  return (
    <div className="wall">
      <h1 className="board-heading">My boards</h1>
      <Boards
      boards={prop.boards}
      addNewBoard={prop.addNewBoard}
      removeBoard={prop.removeBoard}
      updateBoard={prop.updateBoard}
      searchQuery={prop.searchQuery}
      />
    </div>
  );
}

export default Wall;
