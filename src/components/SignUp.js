import React, {Component} from 'react'
import { signupUser } from '../redux/action'
import { connect } from 'react-redux';

class SignUp extends Component {
  state={
    name:'',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  renderPasswordComfirm = () => {
    if(this.state.passwordConfirm !== this.state.password){
      return 'Password Not Match'
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signupHandler = (e) => {
    e.preventDefault();
    if(this.state.password === this.state.passwordConfirm){
      this.props.signupUser({email: this.state.email, password:this.state.password, name:this.state.name})
      this.setState({name:'',
      email: '',
      password: '',
      passwordConfirm: ''})
    }
  }

  render(){
    return (
      <form onSubmit={this.signupHandler}>
        <label htmlFor="name">
          Name:<input type="type" name="name" value={this.state.name} onChange={this.changeHandler}/>
        </label>
        <label htmlFor="email">
          Email:<input type="email" name="email" value={this.state.email} onChange={this.changeHandler}/>
        </label>
        <label htmlFor="password">
          Password: <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
        </label>
        <label htmlFor="passwordConfirm">
          Password: <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.changeHandler}/>
          {this.renderPasswordComfirm()}
        </label>
        <button>Sign Up</button>
      </form>
    )
  }
}

export default connect(null, { signupUser })(SignUp);
