import React, { useState } from 'react';
import '../styles/addbook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function BookAdd() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    e.target.children[1].children[2].value = null;
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h2 className="add-span">ADD NEW BOOK</h2>
        <div className="add-form d-flex">
          <input className="input" type="text" placeholder="Book Title .." onChange={(e) => handleTitleChange(e)} />
          <input className="input" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
          <select className="selector" id="books" name="books" onChange={(e) => handleCategoryChange(e)}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
        </div>
      </form>
    </>
  );
}

export default BookAdd;
