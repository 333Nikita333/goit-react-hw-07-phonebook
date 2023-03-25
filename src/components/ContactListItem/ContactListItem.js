import PropTypes from 'prop-types';
import {
  Button,
  ContactInfo,
  Item,
  Name,
  Number,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const ContactsListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ContactInfo>
        <Name>{name}</Name>
        <Number>{phone}</Number>
      </ContactInfo>
      <Button type="button" onClick={handleDelete} disabled={isLoading}>
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
