
/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023
*/

import { useState } from "react";
import Board_Details from "./Components/Board_Details";

export function useAppState() {
  let board_details = Board_Details;

  const [boardArray, setBoardArray] = useState(board_details);

  return [ boardArray, setBoardArray ];
}
