import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './allContactsAction';

export const allContactsReducer = createReducer([], {
  [contactsActions.getAllContactsSuccess]: (_, action) => [...action.payload],
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(elem => elem.id !== action.payload),
});
export const errorReducer = createReducer(null, {
  [contactsActions.getAllContactsError]: (_, action) => {
    alert(`getAllContactsError: ${action.payload.message}`);
    return action.payload.message;
  },
  [contactsActions.addContactError]: (_, action) => {
    alert(`addContactError: ${action.payload.message}`);
    return action.payload.message;
  },
  [contactsActions.deleteContactError]: (_, action) => {
    alert(`deleteContactError: ${action.payload.message}`);
    return action.payload.message;
  },
});
// export default allContactsReducer;
