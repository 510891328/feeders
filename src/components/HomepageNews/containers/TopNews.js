import React, { Component } from 'react'
import News from '../../News'
export default class TopNews extends Component {
  state = {
    topNews: []
  }

  componentDidMount(){
    const newsApiKey = process.env.REACT_APP_NEWS_API
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`)
    .then(resp => resp.json())
    .then(payload => {
      this.setState({topNews: payload.articles})
    })
  }

  renderTopNews = () => {
    return this.state.topNews.map(news => {
      return <News news={news} />
    })
  }

  render(){
    console.log(this.state.topNews);
    return(
      <>
        <div>TopNews</div>
        {this.renderTopNews()}
      </>
    )
  }
}
