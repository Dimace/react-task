import React from 'react';
import { List, Image, Item } from 'semantic-ui-react';

export default class ClientRow extends React.Component {
    render() {
      const { client, onSelectClient }  = this.props;

      return (
        <Item onClick={() => onSelectClient(client)}>
          <Image size='mini' src={client.general.avatar} />
          <Item.Content>
            <Item.Header classname='header' as='a'>{client.general.firstName+' '+client.general.lastName}</Item.Header>
            <Item.Description>
              job title: <b>{' '+client.job.title}</b>
            </Item.Description>
          </Item.Content>
        </Item>
      );
    }
  }