import PropTypes from 'prop-types';
import {
  Button,
  ContactInfo,
  Item,
  Name,
  Number,
  UserIcon,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { AiOutlineDelete } from 'react-icons/ai';

const ContactsListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <UserIcon />
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{phone}</Number>
      </ContactInfo>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
        <AiOutlineDelete />
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsListItem;
