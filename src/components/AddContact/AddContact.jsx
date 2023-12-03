import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export const AddContact = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // const onChangeName = evt => {
  //   setName(evt.target.value);
  // };
  // const onChangeNumber = evt => {
  //   setNumber(evt.target.value);
  // };
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name1 = form.elements.name.value;
    const number1 = form.elements.number.value;
    console.log('form', form, name1, number1);
    // Викликаємо генератор екшену та передаємо ім'я та номер телефону для поля payload
    // Відправляємо результат – екшен створення контакту
    dispatch(addContact(name1, number1));

    // addNewContact({ name: name, number: number });
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className='mb-2 flex flex-col items-start gap-4'>
      <h2 className='mb-4 text-3xl'>Phonebook</h2>
      <label className=''>
        Name:
        <input
          type='text'
          name='name'
          required
          // onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          className='ml-6 rounded-lg bg-blue-500 px-2 text-white'
        />
      </label>
      <label>
        Number:
        <input
          type='tel'
          name='number'
          required
          // onChange={onChangeNumber}
          pattern='^[ 0-9]+$'
          className='ml-2 rounded-lg bg-blue-500 px-2 text-white'
        />
      </label>
      <button
        type='submit'
        className='ml-auto rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-green-600 active:bg-rose-700'
      >
        add contact
      </button>
    </form>
  );
};

AddContact.propTypes = {
  addNewContact: PropTypes.func,
};
