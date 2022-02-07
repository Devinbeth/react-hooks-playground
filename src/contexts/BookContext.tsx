import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

interface BookContextInterface {

}

export const BookContext = createContext<BookContextInterface | null>(null);

const BookContextProvider = (props: any) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

const obj = {
  key: "value",
  method() {
    return 5;
  }
}

obj.method();

export default BookContextProvider;
