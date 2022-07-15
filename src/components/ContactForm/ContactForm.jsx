import PropTypes from 'prop-types';
import { useState } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { getItemsValueState } from 'redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItemsValueState);
  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      return dispatch(actions.addContact({ name, number }));
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    reset();
    return addContacts({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSumbit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChange}
          value={name}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={handlerChange}
          value={number}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact{' '}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
