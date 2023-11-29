import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Contacts = ({ contacts, onRemoveContact }) => {
  // дані зі стора
  const contact = useSelector(state => state.contacts);
  console.log('contacts', contact);
  // кінець дані зі стора
  return (
    <>
      <h2 className=' mb-4 text-3xl'>Contacts:</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className='mb-2 rounded-md border-2 p-4'>
            <p>
              {name}: {number}
            </p>
            <button
              type='button'
              onClick={() => onRemoveContact(id)}
              className='mt-2 rounded-lg bg-blue-500 px-2 text-white hover:bg-rose-600 active:bg-rose-700'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
