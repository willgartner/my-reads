import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchShelf from './SearchShelf';


class SearchPage extends Component {
    
    render() {
        return (
            <div className="search-books">
                <SearchBar />
                <SearchShelf />
            </div>
        )
    }
     

}

export default SearchPage;