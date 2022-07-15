import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import * as actions from '../../redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValueState,
  getItemsValueState,
} from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItemsValueState);
  const filter = useSelector(getFilterValueState);
  const deleteContacts = contactsId => {
    dispatch(actions.deleteContact(contactsId));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
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
