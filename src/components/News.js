import { connect } from 'react-redux';
import { addArticle } from '../redux/action'

const TopNews = (props) => {
  console.log(props.user);
  const renderButton = () => {
    if(props.user !== null){
      return <button onClick={() => {
        return props.addArticle({
          article: {
            title: props.news.title,
            summary: props.news.description,
            url: props.news.url,
            source: props.news.source.name,
            released: props.news.publishedAt,
            img: props.news.urlToImage,
            author: props.news.author
          },
          token: props.user.user.jwt
        })
      }}>Save Articles</button>
    }
  }
  return(
    <div>
      <div>{props.news.title}</div>
      <div>{props.news.description}<a href={props.news.url}>Detail</a></div>
      <img src={props.news.urlToImage} alt={props.news.title} width="200px"/>
      {renderButton()}
    </div>
  )
}

const mstp = (state) => {
  return {user: state.user}
}

export default connect(mstp, { addArticle })(TopNews);
