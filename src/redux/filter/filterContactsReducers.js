import { createReducer } from '@reduxjs/toolkit';
import * as filterActions from './filterContactsAction';

const filterContactsReducer = createReducer('', {
  [filterActions.changeFilter]: (state, action) => action.payload,
});

export default filterContactsReducer;
