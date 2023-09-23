/*
* @author  Aryan Bhavsar
* @institute  Ahmedabad University
* @contact aryan.b@ahduni.edu.in

Statrt-date : 22 July 2023

*/

import { nanoid } from 'nanoid'
import React from 'react';
export default function NewBoardPopup(prop) {

  const formData = prop.BoardDetails;
  const setFormData = prop.setBoardDetails;

  function handleChange(event){
    setFormData(prevFormData => {
      return {...prevFormData, [event.target.name] : event.target.value, id: nanoid()}
    })
  }


  return (
    <div
      className="modal fade modal-frame"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header" id="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add a name for your board
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form">
              <input
                onChange={handleChange}
                type="text"
                className="modal-form-input"
                placeholder="Enter title"
                name="title"
                value={formData.title}
              />

              <div className="select-colour-title">
                <p id="colour-heading">Select post colour</p>
                <span id="colour-helper"
                  >Here are some templates to help you get started</span
                >
              </div>

              <div className="color-picker">
                <input type="radio" name="color" id="color1" value="#A7F0F9" onChange={handleChange}/>
                <label htmlFor="color1" style={{backgroundColor: "#A7F0F9"}}></label>
 
                <input type="radio" name="color" id="color2" value="#c5c5fc" onChange={handleChange}/>
                <label htmlFor="color2" style={{backgroundColor: "#c5c5fc"}}></label>

                <input type="radio" name="color" id="color3" value="#ffaec0" onChange={handleChange}/>
                <label htmlFor="color3" style={{backgroundColor: "#ffaec0"}}></label>

                <input type="radio" name="color" id="color4" value="#ffcc66" onChange={handleChange}/>
                <label htmlFor="color4" style={{backgroundColor: "#ffcc66"}}></label>
              </div>
            </div>
          </div>
          <div className="modal-footer" id="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="modal-form-button"
              onClick={prop.addNewBoard}
            >
              Create board
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
