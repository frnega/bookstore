import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import processAPIData from '../../api/api';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FeM78gBCs7RYCL9Pcx2B/books';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const GET_BOOKS = 'books/books/GET_BOOKS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${REMOVE_BOOK}/fulfilled`:
      return [
        ...state.filter((item) => item.item_id !== action.payload),
      ];
    case `${GET_BOOKS}/fulfilled`:
      if (action.payload === '') {
        return [];
      }
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}

export const getBooks = createAsyncThunk(GET_BOOKS,
  async () => {
    const response = await axios.get(url);
    const payload = processAPIData(response?.data);
    return payload;
  });

export const addBook = createAsyncThunk(ADD_BOOK,
  async (payload) => {
    await axios.post(url, payload);
    return payload;
  });

export const removeBook = createAsyncThunk(REMOVE_BOOK,
  async (itemId) => {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  });
