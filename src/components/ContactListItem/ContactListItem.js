import PropTypes from 'prop-types';
import {
  Button,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { AiOutlineDelete } from 'react-icons/ai';

const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <UserIcon />
      <ContactInfo>
        <Name>{contact.name}</Name>
        <Number>{contact.phone}</Number>
      </ContactInfo>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? <Spinner size={20} /> : <AiOutlineDelete size={20} />}
      </Button>
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsListItem;
