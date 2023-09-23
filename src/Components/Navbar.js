/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

function Navbar(prop) {

  const searchQuery = prop.searchQuery;
  const setSearchQuery = prop.setSearchQuery;

  function handleChange(event){
    setSearchQuery(event.target.value.toLowerCase())
    console.log(searchQuery);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="toddle_logo.png" alt="" />
      </div>

      <div className="search">
        <img src="search_icon.png" alt="" />
        <input
        type="text" 
        className="search-bar" 
        placeholder="Search.." 
        onChange={handleChange}
        value={searchQuery}
        />
      </div>

      <div className="create-new-board-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img src="add.png" alt="" />
        <span className="button-text">Create new board</span>
      </div>
    </div>
  );
}

export default Navbar

// 