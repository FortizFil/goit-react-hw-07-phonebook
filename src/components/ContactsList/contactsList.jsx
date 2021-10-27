import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/contactItem';
import { contactsSelectors } from '../../redux/contacts';

const ContactsList = ({ contacts }) => {
  const filter = useSelector(contactsSelectors.filter);
  console.log(filter);
  const trimFilter = filter.trim() === '';

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <ul>
      {trimFilter
        ? contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        : getVisibleContacts().map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactsList;
