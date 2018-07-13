import React from 'react';
import ClientRow from '../ClientRow/ClientRow.js';

export default class ClientTable extends React.Component {
    render() {
        const rows = [];
        this.props.clients.forEach((client) => {
            rows.push(<ClientRow
                onSelectClient={this.props.onSelectClient}
                client={client}
                key={client.general.firstName}
            />);
        }); 
    
        return (
            <div>
                {rows }
            </div>
        );
    }
  }