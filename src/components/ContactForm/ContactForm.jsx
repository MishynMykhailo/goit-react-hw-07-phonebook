import PropTypes from 'prop-types';
import { useState } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { getItemsValueState } from 'redux/contacts/contacts-selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getItemsValueState);
  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const addContacts = ({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts`);
    } else {
      console.log(name, phone);
      return dispatch(operations.addContact({ name, phone }));
    }
  };

  const handlerSumbit = e => {
    e.preventDefault();
    reset();
    return addContacts({ name, phone });
  };

  const reset = () => {
    setName('');
    setPhone('');
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
        Phone
        <input
          className={s.input}
          type="tel"
          name="phone"
          onChange={handlerChange}
          value={phone}
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
