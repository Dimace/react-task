import React from 'react';
import ClientTable from '../ClientTable/ClientTable.js';
import SearchBar from '../SearchBar/SearchBar.js';
import './FilterableClientTable.css';
import { connect } from 'react-redux';
import { selectClient } from '../../actions/actions.js';

class FilterableClientTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.filteredClients = props.clients;
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }
    
    onSearchTextChange(e) {
        let value = e.target.value.toLowerCase();
        this.filteredClients = this.props.clients.filter(client => {
          let str='';
          for(let key in client) {
            for(let key2 in client[key]) {
                str += client[key][key2]+' ';
            }
          }
          return str.toLowerCase().includes(value);
        });

        this.setState({
          filterText: value,
        });
    }

    render() {
        return (
        <div>
            <SearchBar
                filterText = {this.state.filterText}
                onSearchTextChange = {this.onSearchTextChange}
            />
            <ClientTable
                clients = {this.filteredClients}
            />
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      clients: state.clients,
      chosenClient: state.currentClient
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      onSelectClient: (client) => {
        dispatch(selectClient(client))
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterableClientTable);