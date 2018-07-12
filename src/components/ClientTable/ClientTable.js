import React from 'react';
import ClientRow from '../ClientRow/ClientRow.js';

export default class ClientTable extends React.Component {
    render() {
        const rows = [];
        console.log('this.props: '+this.props.clients)
        console.log('clients[0]'+this.props.clients[0].general.firstName);
        this.props.clients.forEach((client) => {
            rows.push(<ClientRow
                client={client}
                key={client.general.firstName}
            />);
        }); 
    
        return (
            <div>
                {rows}
            </div>
        );
    }
  }