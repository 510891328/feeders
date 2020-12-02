import News from '../News'

const ResultContainer = (props) => {
  const renderNews = () => {
    return props.results.map((news,i) => <News news={news} key={i} />)
  }
  return(
    <div className="news-container">
      {renderNews()}
    </div>
  )
}

export default ResultContainer;
