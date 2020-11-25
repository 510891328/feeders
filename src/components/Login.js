import React, {Component} from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/action'
class Login extends Component {
  state={
    email: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  loginHandler = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.loginHandler}>
        <label htmlFor="email">
          Email:<input type="email" name="email" value={this.state.email} onChange={this.changeHandler}/>
        </label>
        <label htmlFor="password">
          Password: <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
        </label>
        <button>Log In</button>
      </form>
    )
  }
}
const mstp = (state) => {
  return { user: state.user }
}


export default connect(mstp, { loginUser })(Login);
