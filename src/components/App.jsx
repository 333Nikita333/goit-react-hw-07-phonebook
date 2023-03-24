import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { AppBox } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // function notifiesAlert(numberContact) {
  //   return toast.error(`${numberContact} is already in contacts.`);
  // }

  // function checkСontact(newNumber) {
  //   return contacts.some(contact => contact.phone === newNumber);
  // }

  // function onSubmit(name, phone) {
  //   checkСontact(phone)
  //     ? notifiesAlert(phone)
  //     : dispatch(addContact(name, phone));
  // }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <Form 
      // onSubmit={onSubmit} 
      />

      <h2>Contacts</h2>
      
      {isLoading && !error && <b>Request in progress...</b>}

      {contacts !== undefined && contacts.length > 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}

      {!isLoading && contacts.length === 0 && (
        <p>Contacts list is empty</p>
      )}
    </AppBox>
  );
}
