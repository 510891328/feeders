import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GeneralSearch extends Component {

  state = {
    value: ''
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.props.history);
    this.props.history.push({
        pathname: '/searchResults',
        state: this.state.value
      })
  }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <label>
          General <input type='text' name='General' value={this.state.value} onChange={this.changeHandler}/>
        </label>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default withRouter(GeneralSearch);
