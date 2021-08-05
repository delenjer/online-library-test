import { SET_EVENT, SET_EVENTDnD, SET_DELETE_EVENT } from './action';

export const calendarEvents = (state:any) => state;

const initialState = [
  {
    'title': 'All Day Event very long title',
    'allDay': true,
    'start': new Date(2021, 7, 5),
    'end': new Date(2021, 7, 23),
    id: '222',
  },
];

const calendarEventsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_EVENT:
      return [...state, action.event];

    case SET_EVENTDnD:
      return action.eventDnd;

    case SET_DELETE_EVENT:
      return [...state].filter(event => event.id !== action.id);

    default:
      return state;
  }
}

export default calendarEventsReducer;
