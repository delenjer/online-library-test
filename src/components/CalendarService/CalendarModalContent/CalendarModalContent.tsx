import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import { ICalendarModalContent } from "../../../interface/interface";

export const CalendarModalContent = (
  {
    handleDeleteEvent,
    handleSubmit,
    setEditFieldVal,
    editFieldVal
  }:ICalendarModalContent
) => {

  return (
    <div className="calendar-modal-content">

      <div className="calendar-modal-content__action">
        <span className="calendar-modal-content__label">Delete event:</span>

        <Button
          onClick={handleDeleteEvent}
          variant="contained"
          color="secondary"
          className="calendar-modal-content__btn"
        >
          <span className="material-icons">delete</span>
        </Button>
      </div>

      <div className="calendar-modal-content__action">
        <span className="calendar-modal-content__label">Change event:</span>

        <div className="change-box">
          <form onSubmit={handleSubmit} className="change-box__form" noValidate autoComplete="off">
            <div>
              <TextField
                value={editFieldVal}
                onChange={(e) =>  setEditFieldVal(e.target.value)}
                id="standard-text" label="Add new event" type="text"
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              className=""
              type="submit"
            >
              Save change
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
