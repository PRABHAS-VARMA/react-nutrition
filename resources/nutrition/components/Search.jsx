import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <input
          type="text"
          id="search"
          onChange={this.props.handleSearch}
          placeholder="Search for meals..."
        />
      </div>
    );
  }
}

export default Search;
