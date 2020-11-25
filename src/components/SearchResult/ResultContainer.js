import News from '../News'

const ResultContainer = (props) => {
  const renderNews = () => {
    return props.results.map(news => <News news={news} />)
  }
  return(
    <div>
      {renderNews()}
    </div>
  )
}

export default ResultContainer;
