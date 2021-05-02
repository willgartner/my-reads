import React, { Component } from "react";

class Book extends Component {
  render() {
    const { data, updateBooks } = this.props;
    const coverImg = data && data.imageLinks ? data.imageLinks.thumbnail : null;

    return data ? (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${coverImg})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={data.shelf}
              onChange={(event) => {
                data.shelf = event.target.value;
                updateBooks(data, data.shelf);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{data.title}</div>
        <div className="book-authors">
          {data.authors ? data.authors.join(", ") : ""}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default Book;
