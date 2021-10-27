import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactsApi/contactSlice';
import { filter } from './contacts/contacts-reducer';

const contacts = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactApi.middleware],
});

setupListeners(store.dispatch);
