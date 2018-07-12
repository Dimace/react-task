import React from 'react';

export default class ClientRow extends React.Component {
    render() {
      const client = this.props.client;

      return (
        <div>
          {client.general.firstName}
        </div>
      );
    }
  }