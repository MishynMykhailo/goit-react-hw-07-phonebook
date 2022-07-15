import { useDispatch, useSelector } from 'react-redux';
import s from '../Filter/Filter.module.css';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilterValueState } from 'redux/contacts/contacts-selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValueState);

  const changeFilter = e => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        className={s.input}
      />
    </label>
  );
};

export default Filter;
