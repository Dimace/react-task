import React from 'react';

export default class ClientRow extends React.Component {
    render() {
      const { client, onSelectClient }  = this.props;

      return (
        <div onClick={() => onSelectClient(client)}>
          {client.general.firstName}
        </div>
      );
    }
  }