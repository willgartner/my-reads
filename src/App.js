import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Bookcase from './Bookcase';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {

    state = {
        data: []
    };

    componentDidMount() {
        BooksAPI.getAll()
          .then((data) => {
              console.log(data)
            this.setState(() => ({
              data
            }));
          });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path='/' render={() => (
                        <Bookcase />
                    )} />
                    <Route path='/search' render={() => (
                        <SearchPage />
                    )} />
                </div>            
            </BrowserRouter>
        );
    };
}

export default BooksApp;

