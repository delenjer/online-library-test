export const SET_EVENT = 'SET_EVENT';
export const SET_EVENTDnD = 'SET_EVENTDnD';
export const SET_DELETE_EVENT = 'SET_DELETE_EVENT';
export const SET_EDIT_EVENT = 'SET_EDIT_EVENT';

export const getEvent = (event:any) => ({
  type: SET_EVENT,
  event,
});

export const getEventDnd = (eventDnd:any) => ({
  type: SET_EVENTDnD,
  eventDnd,
});

export const deleteEvent = (id:string) => ({
  type: SET_DELETE_EVENT,
  id,
});

export const editEvent = (id:string, value:string) => ({
  type: SET_EDIT_EVENT,
  id,
  value,
});
