import React, { Component } from 'react'
import BloombergSearch from './BloombergSearch'
import GeneralSearch from './GeneralSearch'
import NYTSearch from './NYTSearch'

class SearchBox extends Component {
  state = {
    searchType: 'general',
    value: ''
  }

  searchHandler = (search) => {
    this.setState({ searchType: search})
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }
  renderSearch = () => {
    switch (this.state.searchType) {
      case 'General':
        return(
          <GeneralSearch />
        )
      case 'Bloomberg':
        return(
          <BloombergSearch />
        )

      case 'NewYorkTimes':
        return(
          <NYTSearch />
        )
      default:
        return(
          <GeneralSearch />
        )
    }
  }

  render(){
    return(
      <div>
        <button onClick={()=>{this.searchHandler('General')}}>GeneralSearch</button>
        <button onClick={()=>{this.searchHandler('Bloomberg')}}>BloombergSearch</button>
        <button onClick={()=>{this.searchHandler('NewYorkTimes')}}>NewYorkTimes</button>
        {this.renderSearch()}
      </div>)
  }
}

export default SearchBox;
