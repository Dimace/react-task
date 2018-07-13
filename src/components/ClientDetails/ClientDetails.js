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
              <p>email: <b>Gerry_Hackett77@gmail.com</b></p>
              <p>phone: <b>(895) 984-0132</b></p>
              <Divider horizontal>address</Divider>
              <p>street: <b>1520 Zemlak Cove</b></p>
              <p>city: <b>New Devonm</b></p>
              <p>zipCode: <b>42586-7898</b></p>
              <p>country: <b>Guinea-Bissau</b></p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

