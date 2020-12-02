import React, { Component } from 'react'
import News from '../../News'
export default class TopNews extends Component {
  state = {
    topNews: []
  }

  componentDidMount(){
    const newsApiKey = process.env.REACT_APP_NEWS_API_SECOND
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`)
    .then(resp => resp.json())
    .then(payload => {
      this.setState({topNews: payload.articles})
    })
  }

  renderTopNews = () => {
    return this.state.topNews.slice(0,9).map((news, i) => {
      return <News news={news} key={i} />
    })
  }

  render(){
    return(
      <div>
        <h1 className='topics'>TopNews</h1>
        <div className="news-container">
          {this.renderTopNews()}
        </div>
      </div>
    )
  }
}
