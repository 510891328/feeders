import React, { Component } from 'react';
import Category from './Category';
import { fetchCategories, addCategories } from '../../../redux/action';
import { connect } from 'react-redux'

class RegularCategory extends Component {
  state = {
    category: 'business'
  }

  changeHandler = (e) => {
    this.setState({category: e.target.value})
  }


  componentDidMount(){
      this.props.fetchCategories(this.props.user.user.user.id)
  }

  renderCategories = () => {
    return this.props.categories.map(category => <Category category={category}/>)
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addCategories({name: this.state.category, token:this.props.user.user.jwt})
  }
  render(){
    console.log(this.props.user.user.user.id);
    console.log(this.props.categories)
    return(
      <div>
        RegularCategory
        {this.renderCategories()}
        <form onSubmit={this.submitHandler}>
          <select onChange={this.changeHandler}>
            <option value='business'>business</option>
            <option value='entertainment'>entertainment</option>
            <option value='general'>general</option>
            <option value='health'>health</option>
            <option value='science'>science</option>
            <option value='sports'>sports</option>
            <option value='technology'>technology</option>
          </select>
          <button>Add Categories</button>
        </form>
      </div>
    )
  }
}
const mstp = (state) => {
  return{
    user: state.user,
    categories: state.categories
  }
}
export default connect(mstp, { fetchCategories, addCategories })(RegularCategory);
