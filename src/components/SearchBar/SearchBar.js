import React from 'react';
import { Input } from 'semantic-ui-react'

export default class SearchBar extends React.Component {
    render() {
      const { onSearchTextChange, filterText } = this.props;
        return (
            <div>
              <div>
                <Input
                  icon='search'
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