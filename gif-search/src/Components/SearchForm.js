import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               ref={(input) => this.query = input}
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
        <button 
          type="submit" 
          id="submit" 
          className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>      
    );
  }
}