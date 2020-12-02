import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class NYTSearch extends Component {
  state = {
    value: '',
    searchBy: 'NewYorkTimes'
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
      <form onSubmit={this.submitHandler} className="search-form">
          <label className='search-label'>
            <div>
             <input type='text' name='NewYorkTimes' value={this.state.value} onChange={this.changeHandler} placeholder="Search By NYtimes"/>
             <button type="submit">&#128269;</button>
            </div>
          </label>
      </form>
    )
  }
}

export default withRouter(NYTSearch);
