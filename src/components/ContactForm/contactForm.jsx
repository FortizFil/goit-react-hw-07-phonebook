import s from './contactForm.module.css';
import { useCreateContactMutation } from '../../redux/contactsApi/contactSlice';

const ContactForm = ({ contacts }) => {
  const [createContact] = useCreateContactMutation();
  const onSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;

    const repeatName = contacts.find(el => el.name.toLowerCase() === name.value.toLowerCase());

    repeatName
      ? alert(`${name.value} is already in your contacts!`)
      : createContact({ name: name.value, number: number.value });

    name.value = '';
    number.value = '';
  };

  return (
    <form className={s.contact__form} onSubmit={e => onSubmit(e)}>
      <h3 className={s.contact__label}>Name</h3>
      <input
        className={s.contact__input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h3 className={s.contact__label}>Number</h3>
      <input
        className={s.contact__input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button className={s.contact__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
