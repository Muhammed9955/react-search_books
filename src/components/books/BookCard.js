import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';

const BookCard = ({ book }) => {
  const [state, setState, addBook, removeBook] = useContext(Context);
  const { books_list, fav_books_list } = state;

  // let BookInFavList = fav_books_list.filter(item => item.id === book.id);
  // console.log('BookInFavList', BookInFavList);
  //card info from book
  const img = book.volumeInfo.imageLinks.thumbnail;
  const title = book.volumeInfo.title;
  const subtitle = book.volumeInfo.subtitle;
  const publishedDate = book.volumeInfo.publishedDate;
  const authors = book.volumeInfo.authors[0];
  const previewLink = book.volumeInfo.previewLink;
  const styleBtn = { marginLeft: '5px' };
  // console.log(book);

  // console.log(fav_books_list);
  const cardStyle = { width: '18rem' };
  return (
    <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="card mb-4 ">
        <div className="card-body">
          <img
            src={img}
            className="card-img-top"
            alt="https://www.akdyusa.com/scs/default/img/no_image_available.jpeg?resizeid=3&resizeh=600&resizew=600"
          />

          <h5 className="card-title">{title}</h5>
          <h6 className="card-text">author: {authors}</h6>
          <h6 className="card-text">published Date :{publishedDate}</h6>

          <div className="container">
            <div className="row">
              <div className=" col-6 ">
                <a href={previewLink} className="btn btn-primary ">
                  Read Book
                </a>
              </div>
              <div className=" col-6">
                {/* {BookInFavList[0] ? (
                  <button className="btn btn-warning">Book Added</button>
                ) : (
                  <button
                    onClick={() => addBook(book.id)}
                    className="btn btn-warning"
                  >
                    Add Book
                  </button>
                )} */}
                <button
                  onClick={() => addBook(book.id)}
                  className="btn btn-warning"
                >
                  Add Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => removeBook(book.id)} className="btn btn-danger ">
          Remove Book
        </button>
      </div>
    </div>
  );
};
export default BookCard;
