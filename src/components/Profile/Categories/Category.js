import { connect } from 'react-redux';
import { deleteCategory } from '../../../redux/action';
const Category = (props) => {
  const deleteHandler = () => {
    props.deleteCategory(props.category.id)
  }
  return(
    <>
      <div>{props.category.category}</div>
      <button onClick={deleteHandler}>X</button>
    </>
  )
}

export default connect(null, { deleteCategory })(Category);
