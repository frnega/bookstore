import React from 'react';
import BookItem from './BookItem';
import BookAdd from './BookAdd';

function BookList() {
  const list = [
    {
      Type: 'Action', name: 'FirstBook', author: 'Frehiywot Nega', id: 1,
    },
    {
      Type: 'Economics', name: 'SecondBook', author: 'Ebissa Gadissa', id: 2,
    },
    {
      Type: 'Science Fiction', name: 'ThirdBook', author: 'Nega Angore', id: 2,
    },
  ];
  function displayBooks() {
    const results = list.map((value) => (
      <BookItem key={value.id} book={value} />
    ));
    return results;
  }
  return (
    <>
      <ul>
        {displayBooks()}
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
