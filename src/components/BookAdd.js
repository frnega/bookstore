import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function BookAdd() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setBook] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlebookChange = (e) => {
    setBook(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      type,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
    setBook('');
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <input type="text" placeholder="Book Title .." onChange={(e) => handleTitleChange(e)} />
        <input className="book-input" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
        <select id="books" name="books" onChange={(e) => handlebookChange(e)}>
          <option value="Economics">Economics</option>
          <option value="Science">Science</option>
          <option value="Adventure">Adventure</option>
        </select>
      </form>
      <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
    </>
  );
}

export default BookAdd;
