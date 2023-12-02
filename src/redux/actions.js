// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/AddContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});
// console.log(addContact('aaa'), 'addc');

// export const addContact = (name, number) => {
//   return {
//     type: 'contact/AddContact',
//     payload: { id: nanoid(), name: name, number: number },
//   };
// };

export const deleteContact = createAction('contact/deleteContact');
// console.log(deleteContact(''), 'addc');

// export const deleteContact = id => {
//   return {
//     type: 'contact/deleteContact',
//     payload: id,
//   };
// };

export const setStatusFilter = createAction('filter/setStatusFilter');
// console.log(setStatusFilter(''), 'addc');

// export const setStatusFilter = value => {
//   return {
//     type: 'filter/setStatusFilter',
//     payload: value,
//   };
// };
