import React, { Component } from 'react'
import Article from './Article';
import { fetchArticles } from '../../redux/action'
import { connect } from 'react-redux'

class ArticleContainer extends Component {
  componentDidMount(){
    this.props.fetchArticles({user_id: this.props.user.user.user.id})
  }

  renderArticles = () => {
    return this.props.articles.map( article => {
      return <Article article={article}/>
    })
  }
  render(){
    return(
      <div>
        {this.renderArticles()}
      </div>
    )
  }
}

const mstp = (state) => {
  return {
    user: state.user,
    articles: state.articles
  }
}
export default connect(mstp, { fetchArticles })(ArticleContainer);
