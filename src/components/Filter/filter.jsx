import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './filter.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={s.filter__label}>
      <h3 className={s.filter__name}>Find contacts by name</h3>
      <input
        className={s.filter__input}
        type="text"
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
