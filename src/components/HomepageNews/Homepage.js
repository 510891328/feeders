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

        <div className="center">
          Due to API restriction not able to give features on search all News.
          Search on New York Times working fine.
          <iframe width="853" height="480" src="https://www.youtube.com/embed/4GbD2IQmzOY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="Demo Of Feeders" allowfullscreen>Demo</iframe>
        </div>
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
