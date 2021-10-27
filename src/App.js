import ContactForm from './components/ContactForm/contactForm';
import ContactsList from './components/ContactsList/contactsList';
import Filter from './components/Filter/filter';
import { useFetchContactQuery } from './redux/contactsApi/contactSlice';

const App = () => {
  const { data: contacts } = useFetchContactQuery();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />

      <>
        <h2>Contacts</h2>
        <Filter />
        {contacts && <ContactsList contacts={contacts} />}
      </>
    </div>
  );
};

export default App;
