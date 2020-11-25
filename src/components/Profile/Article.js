import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../../redux/action'

class Article extends Component {

  deleteHandler = () => {
    this.props.deleteArticle(this.props.article.id)
  }
  render(){
    const article = this.props.article
    return(
      <div>
        <div>Title: {article.title}</div>
        <div>Author: {article.author}</div>
        <div>publishedAt: {article.released}</div>
        <div>Summary: {article.summary}</div>
        <div>Source: {article.source} <a href={article.url}>detail</a></div>
        <div><img src={article.img} alt={article.title} width="200px"/></div>
        <button onClick={this.deleteHandler}>Delete</button>
      </div>
    )
  }
}

export default connect(null, { deleteArticle })(Article);
