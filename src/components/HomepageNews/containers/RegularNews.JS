import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegularNews extends Component {

  render(){
    return(<div>RegularNews</div>)
  }
}

const mstp = state => {
  return { user: state.user}
}

export default connect(mstp)(RegularNews);
