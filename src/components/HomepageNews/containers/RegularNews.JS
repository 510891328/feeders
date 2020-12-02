import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../redux/action';
import News from '../../News'
class RegularNews extends Component {
  state = { }
  componentDidMount(){
      this.props.fetchCategories(this.props.user.user.user.id)
      const newsApiKey = process.env.REACT_APP_NEWS_API_SECOND
      this.props.categories.map(category => {
        if(category.category_type === "general"){
          fetch(`http://newsapi.org/v2/top-headlines?country=us&category=${category.category}&apiKey=${newsApiKey}`)
          .then(resp => resp.json())
          .then(news => this.setState({[category.category]: news}))
        }
        return null;
      })
  }

  renderNewsByCategory = (articles) => {
    return articles.slice(0,3).map((article) => {
      return <News news={article} />
    })
  }
  renderNews = () => {
    const stateKeys = Object.keys(this.state)
    const categories = this.props.categories.map(category => {
      return category.category
    })
    if(stateKeys.length === categories.length){
      const categorizedNews = [];
      for(const category in this.state){
        categorizedNews.push(
          (
            <div>
              <h2 className='sub-topics'>{category}</h2>
              <div className='news-container'>
                {this.renderNewsByCategory(this.state[category].articles)}
              </div>
            </div>
          ))
      }
      return categorizedNews
    }
  }

  render(){

    return(
        <div>
        <h1 className='topics'>Categorized News</h1>
        {this.renderNews()}
        </div>
    )
  }
}

const mstp = state => {
  return {
          user: state.user,
          categories: state.categories
        }
}

export default connect(mstp, { fetchCategories })(RegularNews);
