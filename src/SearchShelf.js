import React, { Component } from "react";
import Book from "./Book";

class SearchShelf extends Component {
  render() {
    const { results, updateBooks } = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((result) => (
            <li key={result.id}>
              <Book data={result} updateBooks={updateBooks}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default SearchShelf;
