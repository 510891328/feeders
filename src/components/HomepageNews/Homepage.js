import React, { Component } from 'react'
import SearchBox from './Searches/SearchBox'
import TopNews from './containers/TopNews'
import RegularNews from './containers/RegularNews';
import { connect } from 'react-redux'

class Homepage extends Component {

  renderComponents = () => {
      if(this.props.user.user !== null){
        return(
          <>
            <SearchBox />
            <TopNews />
            // <RegularNews />
          </>
        )

      }else{
      return(
        <>
          <SearchBox />
          <TopNews />
        </>
      )
    }
  }
  render(){
    return(
      <>
      {this.renderComponents()}
      </>
    )
  }
}
const mstp = (state) => {
  return{
    user: state.user
  }
}
export default connect(mstp)(Homepage);
