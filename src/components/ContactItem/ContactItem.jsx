import PropTypes from 'prop-types';
import s from '../ContactItem/ContactItem.module.css';
const ContactItem = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li className={s.li}>
      <div className={s.divItemContainer}>
        {name}: {number}{' '}
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContacts(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContacts: PropTypes.func,
};

export default ContactItem;
