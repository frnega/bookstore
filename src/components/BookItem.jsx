import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

function BookItem() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookStore.length) {
      dispatch(getBooks());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    bookStore.map((book) => (
      <li key={book.item_id}>
        <span>
          {' '}
          {book.title}
          {' '}
        </span>
        <span>
          {' '}
          {book.author}
          {' '}
        </span>
        <span>
          {' '}
          {book.category}
          {' '}
        </span>

        {' '}
        <button type="button" onClick={() => handleRemove(book.item_id)}>Delete</button>
      </li>
    ))

  );
}

export default BookItem;
