import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValueState,
  getItemsValueState,
} from 'redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';
const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);
  const contacts = useSelector(getItemsValueState);
  const filter = useSelector(getFilterValueState);
  const deleteContacts = contactsId => {
    dispatch(operations.deleteContact(contactsId));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(({ name, phone, id }) => {
        return (
          <ContactItem
            name={name}
            phone={phone}
            key={id}
            id={id}
            onDeleteContacts={deleteContacts}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};

export default ContactList;
