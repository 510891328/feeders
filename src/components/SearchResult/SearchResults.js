import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResultContainer from './ResultContainer';

class SearchResults extends Component {
  state = {
    results: [],
    page: 1
  }

  componentDidMount(){
    const newYorkTimesApiKey = process.env.REACT_APP_NEW_YORK_TIMES_API
    const newsApiKey = process.env.REACT_APP_NEWS_API
    switch (this.props.location.state.searchBy) {
      case 'general':
        fetch(`https://newsapi.org/v2/everything?q=${this.props.location.state.value}&page=${this.state.page}&apiKey=${newsApiKey}`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results.articles}))
        break;
      case 'NewYorkTimes':
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.location.state.value}&page=${this.state.page}&api-key=${newYorkTimesApiKey}`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results.response.docs}))
        break;
      default:
        return null;
    }
  }

  fetchResults = () => {
    const newsApiKey = process.env.REACT_APP_NEWS_API
    const newYorkTimesApiKey = process.env.REACT_APP_NEW_YORK_TIMES_API
    switch (this.props.location.state.searchBy) {
      case 'general':
        fetch(`https://newsapi.org/v2/everything?q=${this.props.location.state.value}&page=${this.state.page}&apiKey=${newsApiKey}`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results.articles}))
        break;
      case 'NewYorkTimes':
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.location.state.value}&page=${this.state.page}&api-key=${newYorkTimesApiKey}`)
        .then(resp => resp.json())
        .then(results => this.setState({results: results.response.docs}))
        break;
      default:
        return null
    }
  }

  renderSearch = () => {
    this.fetchResults()
    switch (this.props.location.state.searchBy) {
      case 'general':
        return <ResultContainer results={this.state.results} page={this.state.page}/>
      case 'NewYorkTimes':
        const results = this.state.results.map(result => {
          let img;
          if(result.multimedia.length > 0){
            img = `https://www.nytimes.com/${result.multimedia[0].url}`
          }
          return {
            title: result.headline.main,
            description: result.abstract,
            url: result.web_url,
            source:{
              name: 'New York Times'
            },
            publishedAt: result.pub_date,
            urlToImage: img,
            author: result.byline.original
          }
        })
        return <ResultContainer results={results} page={this.state.page}/>
      default:
        return null;
    }
  }

  pageHandler = (page) => {
    switch(page) {
      case "first":
        this.setState( { page: 1 } )
        break;
      case "previous":
        if(this.state.page > 1){
          this.setState( { page: this.state.page - 1 } );
        };
        break;
      case "1":
        this.setState( { page: 1 } );
        break;
      case "2":
        this.setState( { page: 2 } );
        break;
      case "3":
        this.setState( { page: 3 } );
        break;
      case "4":
        this.setState( { page: 4 } );
        break;
      case "5":
        this.setState( { page: 5 }  );
        break;
      case "next":
        if(this.state.page < 5){
          this.setState( { page: this.state.page + 1 } );
        };
        break;
      case "last":
        this.setState( { page: 5 } );
        break;
      default:
        this.setState( { page: 1 } );
        break;
    }
  }


  render(){
    return(
      <div className="news-container">
        {this.renderSearch()}
        <div className="page-controller">
          <button onClick={()=> this.pageHandler("first")}>First Page</button>
          <button onClick={()=> this.pageHandler("previous")}>Previous Page</button>
          <button onClick={()=> this.pageHandler("1")}>1</button>
          <button onClick={()=> this.pageHandler("2")}>2</button>
          <button onClick={()=> this.pageHandler("3")}>3</button>
          <button onClick={()=> this.pageHandler("4")}>4</button>
          <button onClick={()=> this.pageHandler("5")}>5</button>
          <button onClick={()=> this.pageHandler("next")}>Next Page</button>
          <button onClick={()=> this.pageHandler("last")}>Last Page</button>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchResults);
