import { HiUser } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.contact}>
        <p className={s.descr}>
          <HiUser className={s.icon} size="20" /> {name}
        </p>
        <p className={s.descr}>
          <HiPhone className={s.icon} size="20" /> {number}
        </p>
      </div>
      <div className={s.btnWrap}>
        <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default Contact;
