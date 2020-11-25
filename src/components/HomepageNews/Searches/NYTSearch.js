import React, { Component } from 'react'

class NYTSearch extends Component {
  state = {
    value: ''
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  render(){
    return(
      <form>
        <label>
         New York Times <input type='text' name='NewYorkTimes' value={this.state.value} onChange={this.changeHandler}/>
        </label>
      </form>
    )
  }
}

export default NYTSearch;
