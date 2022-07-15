import ContactList from '../ContactList';
import Filter from '../Filter';
import s from '../App/App.module.css';
import { ContactForm } from 'components/ContactForm';

export const App = () => {
  return (
    <div className={s.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
