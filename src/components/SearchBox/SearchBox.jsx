import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useState } from 'react';

const SearchBox = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const value = e.target.value.trim();

    if (value === '') {
      setError('Please enter a search term');
    } else {
      setError('');
    }

    dispatch(changeFilter(value));
  };

  return (
    <div className={s.wrap}>
      <p className={s.descr}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      {error && <p className={s.error}>{error}</p>}{' '}
    </div>
  );
};
export default SearchBox;
