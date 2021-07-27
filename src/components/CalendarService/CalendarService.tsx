import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import *as selectors from "../../store/store";
import { getEvent, getEventDnd, deleteEvent } from "../../store/calendarReducer/action";

//@ts-ignore
const DragAndDropCalendar:any = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export const CalendarService = () => {
  const calendarEvents = useSelector((state:any) => selectors.calendarEvents(state));
  const dispatch = useDispatch();

  const handleSelect = ({ start, end }:any) => {
    const title:string | null = window.prompt('New Event name');

    if (!title?.length) {
      return;
    }

    dispatch(getEvent({
      start,
      end,
      title,
      id: uuidv4(),
    }));
  }

  const handleClickEvent = (event:any) => {
    dispatch(deleteEvent(event.id));
  }

  const moveEvent = ({ event, start, end }:any) => {
    const idx = calendarEvents.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...calendarEvents];
    nextEvents.splice(idx, 1, updatedEvent);

    dispatch(getEventDnd(nextEvents));
  }

  return (
    <div>
      <DragAndDropCalendar
        selectable
        localizer={localizer}
        events={calendarEvents}
        onEventDrop={moveEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
        onSelectEvent={handleClickEvent}
      />
    </div>
  );
}
