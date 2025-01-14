import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    const { title, books, updateBooks } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book data={book} updateBooks={updateBooks} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
