import PropTypes from 'prop-types';
import {
  Button,
  ContactInfo,
  Item,
  Name,
  Number,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactsListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item id={id}>
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{phone}</Number>
      </ContactInfo>
      <Button type="button" onClick={handleDelete}>
        Delete
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
