import React, { Component } from 'react'

class BloombergSearch extends Component {

  state = {
    value: ''
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  render(){
    return(
      <form>
        Bloomberg <input type='text' name='Bloomberg' value={this.state.value} onChange={this.changeHandler}/>
      </form>
    )
  }
}

export default BloombergSearch;
