/* eslint-disable react/prop-types */
import React from 'react';

function BookItem({ book }) {
  return (

    <li>
      <span>
        {' '}
        {book.Type}
        {' '}
      </span>
      <span>
        {' '}
        {book.name}
        {' '}
      </span>
      <span>
        {' '}
        {book.author}
        {' '}
      </span>
      <button type="button">Remove</button>
    </li>

  );
}

export default BookItem;
