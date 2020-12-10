import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GeneralSearch extends Component {

  state = {
    value: '',
    searchBy: 'general'
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/searchResults',
        state: this.state
      })
  }

  render(){
    return(
      <form onSubmit={this.submitHandler} className="search-form" disabled>
        <label className="search-label">
          <div>
            <input type='text' name='General' value={this.state.value} onChange={this.changeHandler} placeholder="Search all" disabled/>
            <button type="submit" disabled>&#128269;</button>
          </div>
        </label>
      </form>
    )
  }
}

export default withRouter(GeneralSearch);
