import React, {Component} from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/action'
import { withRouter } from 'react-router-dom'
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
    this.props.loginUser({ email: this.state.email, password: this.state.password })

    this.setState({
      email: '',
      password: ''
    })
  }

  userLogin = () => {
    if(this.props.user.user !== null){
      if(this.props.user.user.hasOwnProperty('message')){
        return <div className='invalid-pass'><p>Invalid Password or Email</p></div>
      }else{
        this.props.history.push('/profile')
      }
    }
  }
  render(){
    return (
      <div className="form-wrapper">
        <form className="login-form" onSubmit={this.loginHandler}>
          {this.userLogin()}
          <label htmlFor="email">
            Email:<input type="email" name="email" value={this.state.email} onChange={this.changeHandler}/>
          </label>
          <label htmlFor="password">
            Password: <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
          </label>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}
const mstp = (state) => {
  return { user: state.user }
}


export default withRouter(connect(mstp, { loginUser })(Login));
