import { createSelector } from '@reduxjs/toolkit';
import { getContacts } from '../allContacts/contactsSelectors';
// console.log(getContacts);

export const getfilter = store => store.contacts.filter;

export const filteredData = createSelector(
  getContacts,
  getfilter,
  (allContacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    const visibleContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return visibleContacts;
  },
);
///without createSelector
// export const filteredData = store => {
//   const allContacts = getContacts(store);
//   const filterValue = getfilter(store);
//   const normalizedFilter = filterValue.toLowerCase();
//   const visibleContacts = allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return visibleContacts;
// };
