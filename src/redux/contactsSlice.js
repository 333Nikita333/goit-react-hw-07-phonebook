import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    //////////////////////////////////////////////////
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    //////////////////////////////////////////////////
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    //////////////////////////////////////////////////
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.contacts.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      // state.contacts.splice(index, 1);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
    //////////////////////////////////////////////////
  },
});

export const contactsReducer = contactsSlice.reducer;

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const extraActions = [fetchContacts, addContact, deleteContact];

// const getActions = type => extraActions.map(action => action[type]);

// const initialState = {
//   contacts: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts = state.contacts.filter(
//           contact => contact.id !== action.payload.id
//         );
//       })
//       .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
//       .addMatcher(isAnyOf(...getActions('pending')), handlePending)
//       .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
// });
