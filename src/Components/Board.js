/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import { Link, useParams } from "react-router-dom";
import Posts from "./Posts";

export default function Board(prop) {
  let styles = {
    backgroundColor: prop.color,
  };

  return (
    <Link
      to={`/${prop.id}`}
      element="<Posts />"
      id="board-title-linked-to-route"
    >
      <div className="board">
        <div className="color" style={styles}></div>

        <p className="title">{prop.title}</p>

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
              onClick={() => prop.updateBoard(prop.id)}
            >
              <img src="./edit.png" alt="" id="edit" />
              <span className="edit-text" id="dropdown-item-text">
                Edit
              </span>
            </div>
          </li>

          <li>
            <div
              className="dropdown-item"
              id="dropdown-item"
              onClick={() => prop.removeBoard(prop.id)}
            >
              <img src="./delete.png" id="delete" alt="" />
              <span className="delete-text" id="dropdown-item-text">
                Delete
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
}
