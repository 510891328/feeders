import { connect } from 'react-redux';
import { deleteCategory } from '../../../redux/action';
const Category = (props) => {
  const deleteHandler = () => {
    props.deleteCategory(props.category.id)
  }
  return(
    <div className="single-category">
      <div>{props.category.category}</div>
      <button onClick={deleteHandler}>X</button>
    </div>
  )
}

export default connect(null, { deleteCategory })(Category);
