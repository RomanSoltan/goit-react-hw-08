import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67b4fb67a9acbdb38ed105dc.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ signal }, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts', { signal });
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', body);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
