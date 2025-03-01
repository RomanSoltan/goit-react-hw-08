import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

// Selectors
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    // console.log('Filtered Contacts logic memo');
    return contacts.filter(item =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  },
);
