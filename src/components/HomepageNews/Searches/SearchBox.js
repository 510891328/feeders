import React, { Component } from 'react'
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
      <div className="search-box">
        <div className="choose-search">
          <button onClick={()=>{this.searchHandler('General')}} className="search-tap">GeneralSearch</button>
          <button onClick={()=>{this.searchHandler('NewYorkTimes')}} className="search-tap">NewYorkTimes</button>
        </div>
        <div>
          {this.renderSearch()}
        </div>
      </div>)
  }
}

export default SearchBox;
