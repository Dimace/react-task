import React from 'react';
import { connect } from 'react-redux';
import ClientDetails from '../ClientDetails/ClientDetails.js';
import { Grid, Segment } from 'semantic-ui-react';

class MainComponent extends React.Component {
  
  render() {
    const { currentClient } = this.props;
    return (
      <Grid.Column width={10} stretched>
        <Segment>
          <div>
          {   currentClient == null ?
              <h1>Please select client</h1> 
              :
              <div>
                <ClientDetails client={currentClient} />
              </div>
          }
          </div>
        </Segment>
      </Grid.Column>
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