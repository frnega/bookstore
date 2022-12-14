import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);

  return (
    <>
      <div>
        <div>
          <h5>{categories}</h5>
        </div>
        <button type="button" onClick={(e) => { e.preventDefault(); dispatch(checkStatus()); }}>
          Under construction
        </button>
      </div>
    </>
  );
};

export default Categories;
