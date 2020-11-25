import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import ArticleContainer from './ArticleContainer';
import RegularCategory from './Categories/RegularCategory';

class ProfileContainer extends Component {
  
  render(){
    console.log(this.props.user)
    return(
      <div>
        Profile
        <RegularCategory user={this.props.user}/>
        <UserInfo />
        <ArticleContainer />
      </div>
    )
  }
}

const mstp = (state) => {
  return {user: state.user}
}

export default connect(mstp)(ProfileContainer);
