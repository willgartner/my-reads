import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import { throttle } from "throttle-debounce";
import SearchShelf from "./SearchShelf";

class SearchPage extends Component {
  state = {
    results: [],
  };

  searchBooks = (event) => {
    this.throttleSearch(event.target.value);
  };

  throttleSearch = throttle(1000, (search) => {
    const { books } = this.props;
    if (search && search !== "") {
      BooksAPI.search(search)
        .then((results) => {
          results.forEach((r) => {
            const myBook = books.find((b) => b.id === r.id);
            myBook ? (r.shelf = myBook.shelf) : (r.shelf = "none");
          });
          this.setState(() => ({
            results,
          }));
        })
        .catch(() => this.setState({ results: [] }));
    } else {
      this.setState({ results: [] });
    }
  });

  render() {
    const { updateBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              name="search"
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.searchBooks(e)}
            />
          </div>
        </div>
        <SearchShelf results={this.state.results} updateBooks={updateBooks} />
      </div>
    );
  }
}

export default SearchPage;
