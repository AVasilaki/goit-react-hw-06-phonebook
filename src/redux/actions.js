import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contact/AddContact',
    payload: { id: nanoid(), name: name, number: number },
  };
};

export const deleteContact = id => {
  return {
    type: 'contact/deleteContact',
    payload: id,
  };
};
export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
