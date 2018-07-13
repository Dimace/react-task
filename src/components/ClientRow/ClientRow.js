import React from 'react';
import { Image, Item } from 'semantic-ui-react';

export default class ClientRow extends React.Component {
    render() {
      const { client, onSelectClient }  = this.props;

      return (
        <Item onClick={() => onSelectClient(client)}>
          <Image size='tiny' circular src={client.general.avatar} />
          <Item.Content>
            <Item.Header>{client.general.firstName+' '+client.general.lastName}</Item.Header>
            <Item.Description>
              job title: <b>{' '+client.job.title}</b>
            </Item.Description>
          </Item.Content>
        </Item>
      );
    }
  }