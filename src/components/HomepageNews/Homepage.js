import React, { Component } from 'react'
import SearchBox from './Searches/SearchBox'
// import TopNews from './containers/TopNews'
// import RegularNews from './containers/RegularNews';
import { connect } from 'react-redux'

class Homepage extends Component {

  // Commented out since API not working for deployment
  // renderComponents = () => {
  //     if(this.props.user.user !== null){
  //       return(
  //         <>
  //           <SearchBox />
  //           <TopNews />
  //           <RegularNews />
  //         </>
  //       )
  //
  //     }else{
  //     return(
  //       <>
  //         <SearchBox />
  //         <TopNews />
  //       </>
  //     )
  //   }
  // }
  render(){
    return(
      <>
        <SearchBox />
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
