import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Bookcase from "./Bookcase";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getMyBooks();
  }

  getMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getMyBooks();
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => <Bookcase books={this.state.books} updateBooks={this.updateBooks} />} />
          <Route
            path="/search"
            render={() => <SearchPage books={this.state.books} updateBooks={this.updateBooks} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
