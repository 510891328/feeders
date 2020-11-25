import React, { Component } from 'react'
import SearchBox from './Searches/SearchBox'
import TopNews from './containers/TopNews'
class Homepage extends Component {
  render(){
    return(
      <>
        <SearchBox />
        <TopNews />
      </>
    )
  }
}

export default Homepage;
