import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

export const Filter = () => {
  // redux
  const dispatch = useDispatch();
  const handleFilter1 = evt => {
    dispatch(setStatusFilter(evt.target.value));
    console.log(evt.target.value);
  };
  console.log(handleFilter1, 'hf');
  // end redux
  return (
    <div className='mb-2 mt-6  '>
      <label className='grid text-lg'>
        Find contacts by name
        <input
          type='text'
          name='filter'
          onChange={handleFilter1}
          className='rounded-lg bg-blue-500 px-2 text-white '
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func,
};
