import React from 'react';
import ClientRow from '../ClientRow/ClientRow.js';
import { Segment, Item } from 'semantic-ui-react';

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
            <Segment color='blue'>
                <Item.Group link>
                    {rows }
                </Item.Group>
            </Segment>
        );
    }
  }