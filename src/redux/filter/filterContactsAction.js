import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('FILTER_CONTACT');

/////without toolkit
// import * as filterActionTypes from './filterActionTypes';
// export const changeFilter = value => {
//   // console.log(value);
//   return {
//     type: filterActionTypes.FILTER_CONTACT,
//     payload: value,
//   };
// };
