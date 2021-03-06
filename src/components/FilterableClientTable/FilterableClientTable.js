import React from 'react';
import ClientTable from '../ClientTable/ClientTable.js';
import SearchBar from '../SearchBar/SearchBar.js';
import { connect } from 'react-redux';
import { selectClient } from '../../actions/actions.js';
import { Grid, Segment } from 'semantic-ui-react';

class FilterableClientTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.filteredClients = props.clients;
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onSelectClient = this.onSelectClient.bind(this);
    }
    
    onSelectClient(client) {
        this.props.onSelectClient(client);
    }

    onSearchTextChange(e) {
        let value = e.target.value.toLowerCase();
        let originalValue = e.target.value;
        this.filteredClients = this.props.clients.filter(client => {
          for(let key in client) {
            for(let key2 in client[key]) {
                if(String(client[key][key2]).toLowerCase().includes(value) && key2 !== "avatar")
                    return true;
            }
          }
          return false;
        });

        this.setState({
          filterText: originalValue,
        });
    }

    render() {
        return (
        <Grid.Column width={5}>
            <Segment raised>
                <SearchBar
                    filterText = {this.state.filterText}
                    onSearchTextChange = {this.onSearchTextChange}
                />
                <ClientTable
                    clients = {this.filteredClients}
                    onSelectClient = {this.onSelectClient}
                />
            </Segment>
        </Grid.Column>
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