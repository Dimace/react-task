import React from 'react';

export default class SearchBar extends React.Component {
    render() {
      const { onSearchTextChange, filterText } = this.props;
        return (
            <div>
              <h1>Search</h1>
              <div>
                <input
                  type = "text"
                  value = {filterText}
                  placeholder = "Search..."
                  onChange = {onSearchTextChange}
                />
              </div>
            </div>
        );
    }
}