import React from 'react';

export default class ClientDetails extends React.Component {

  render() {
    const { client } = this.props;
    return (
      <div>
        <h1>details: {client.general.firstName}</h1>
      </div>
    );
  }
}

