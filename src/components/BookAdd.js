import React from 'react';

function BookAdd() {
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book Title .." />
      <input type="text" placeholder="Book Author .." />
      <form action="#">
        <select id="books" name="books">
          <option value="Action">Action</option>
          <option value="ScienceFiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </form>
      <button type="button">ADD BOOK</button>
    </>
  );
}

export default BookAdd;
