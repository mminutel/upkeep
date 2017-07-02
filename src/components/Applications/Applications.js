import React, { Component } from 'react';
import './Applications.css';

class Applications extends Component {

  render() {
    return (
      <div>
        {this.props.match.params.application}
      </div>
    );
  }

}

export default Applications;
