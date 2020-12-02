import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleContainer from './ArticleContainer';
import RegularCategory from './Categories/RegularCategory';
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {
  renderProfile = () => {
    if(this.props.user.user !== null){
      return(
        <div>
          <RegularCategory user={this.props.user}/>
          <ArticleContainer />
        </div>
      )
    }else{
      this.props.history.push('/login')
      return null
    }
  }
  render(){
    return this.renderProfile()
  }
}

const mstp = (state) => {
  return {user: state.user}
}

export default withRouter(connect(mstp)(ProfileContainer));
