import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    event.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>      
    );
  }
}