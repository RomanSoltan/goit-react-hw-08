import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {!contacts.length ? (
        <p className={s.descr}>No contacts. Please add a new contact</p>
      ) : (
        contacts.map(contact => <Contact {...contact} key={contact.id} />)
      )}
    </ul>
  );
};
export default ContactList;
