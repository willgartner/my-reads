import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Bookcase extends Component {
  getBooksByShelf = (books, shelf) =>
    books.filter((book) => book.shelf === shelf);

  render() {
    const { books, updateBooks } = this.props;
    const shelves = [
      { title: "Currently Reading", shelf: "currentlyReading" },
      { title: "Want To Read", shelf: "wantToRead" },
      { title: "Read", shelf: "read" },
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.shelf}
              books={this.getBooksByShelf(books, shelf.shelf)}
              title={shelf.title}
              updateBooks={updateBooks}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Bookcase;
