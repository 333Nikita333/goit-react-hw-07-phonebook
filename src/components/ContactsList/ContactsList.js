import ContactListItem from 'components/ContactListItem';
import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectContactByName } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContactByName);
  
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

export default ContactsList;
