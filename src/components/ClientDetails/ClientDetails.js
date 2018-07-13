import React from 'react';
import { Item, Divider } from 'semantic-ui-react';

export default class ClientDetails extends React.Component {
  render() {
    const { client } = this.props;
    return (
      <Item.Group>
        <Item>
          <Item.Image size='small' src={client.general.avatar} />
          <Item.Content verticalAlign='top'>
            <h1>{client.general.firstName+' '+client.general.lastName}</h1>
            <Item.Description>
              <h3>{client.job.title+' - '+client.job.company}</h3>
              <Divider horizontal>contact</Divider>
              <p>email: <b>{client.contact.email}</b></p>
              <p>phone: <b>{client.contact.phone}</b></p>
              <Divider horizontal>address</Divider>
              <p>street: <b>{client.address.street}</b></p>
              <p>city: <b>{client.address.city}</b></p>
              <p>zipCode: <b>{client.address.zipCode}</b></p>
              <p>country: <b>{client.address.country}</b></p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

