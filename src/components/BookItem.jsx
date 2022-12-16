import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';
import progressBar from '../images/progress.png';

function BookItem() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookStore.length) {
      dispatch(getBooks());
    }
  }, [bookStore.length, dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    bookStore.map((book) => (
      <>
        <li key={book.item_id} className="book-container d-flex">
          <div className="general-info d-flex">
            <span className="genre">{book.category}</span>
            <h3 className="title">{book.title}</h3>
            <span className="author">{book.author}</span>
            <ul className="book-management d-flex">
              <li><button type="button">Comments</button></li>
              <li className="verticleLine" />
              <li>
                {' '}
                <button type="button" onClick={() => handleRemove(book.item_id)}>Remove</button>
              </li>
              <li><button type="button">Edit</button></li>
            </ul>
          </div>
          <div className="completion-detail d-flex">
            <img className="progress-bar" src={progressBar} alt="progress-bar" />
            <div className="completion-text d-flex">
              <span className="completion">{}</span>
              <span className="completed-percent">64%</span>
              <span className="completed-word">Completed</span>
            </div>
          </div>
          <div className="current-chapter d-flex">
            <span className="current-chapter-span">CURRENT CHAPTER </span>
            <span className="current-chapter-value">
              Chapter
              {'17 '}
            </span>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </li>
      </>
    ))

  );
}

export default BookItem;
