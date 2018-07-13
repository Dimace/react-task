import React from 'react';
import { connect } from 'react-redux';
import ClientDetails from '../ClientDetails/ClientDetails.js';

class MainComponent extends React.Component {
  
  render() {
    const { currentClient } = this.props;
    return (
      <div>
      { this.props.currentClient == null ?
          <h1>Please select client</h1> 
          :
          <div>
            <ClientDetails client={currentClient} />
          </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentClient: state.currentClient
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);