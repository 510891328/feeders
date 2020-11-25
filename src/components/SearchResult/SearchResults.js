import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResultContainer from './ResultContainer'

class SearchResults extends Component {
  state = {
    results: [],
    page: 5
  }
  componentDidMount(){
    const newsApiKey = process.env.REACT_APP_NEWS_API
    fetch(`https://newsapi.org/v2/everything?q=${this.props.location.state}&pageSize=100&page=1&apiKey=${newsApiKey}`)
    .then(resp => resp.json())
    .then(results => this.setState({results: results.articles}))
  }

  renderSearch = () => {
    let page = 1
    let container = [];
    let results = this.state.results
    while(results.length > 0){
      container.push(<ResultContainer results={results.slice(0, 20)} page={page}/>)
      results = results.slice(20)
      page++;
    }
    console.log(container);
    return container
  }

  // pageHandler = () => {
  //
  // }

  render(){
    return(
      <div>
        {this.renderSearch()}
        <button>First Page</button>
        <button>Previous Page</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>Next Page</button>
        <button>Last Page</button>
      </div>
    )
  }
}

export default withRouter(SearchResults);
