import React, {Component} from 'react';
import Book from './Book';

class SearchShelf extends Component {
    
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    <li>
                        <Book />
                    </li>
                </ol>
            </div>
        )
    }
     

}

export default SearchShelf;