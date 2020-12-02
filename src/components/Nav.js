import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/action';
import { withRouter } from 'react-router-dom';

const Nav = withRouter((props) => {
  const logout = () => {
    props.logoutUser(props.user)
    props.history.push('/')
  }
  const renderNav = () => {
    if(props.user.user !== null && props.user.hasOwnProperty('message')){
      return(
        <nav>
          <div>
            <li>Hi, {props.user.user.user.name}</li>
            <li><NavLink to="/profile" className="active"> Profile </NavLink></li>
            <li><NavLink to="/" className="active"> Homepage </NavLink></li>
          </div>
          <div>
            <NavLink to="/login"><button className="nav-button" hidden>LogIn</button></NavLink>
            <button onClick={logout} className="nav-button">LogOut</button>
          </div>
        </nav>
      )
    }else{
      return(
        <nav>
          <div>
            <li><NavLink to="/signup" className="active"> SignUp </NavLink></li>
            <li><NavLink to="/profile" className="active"> Profile </NavLink></li>
            <li><NavLink to="/" className="active"> Homepage </NavLink></li>
          </div>
          <div>
            <NavLink to="/login"><button className="nav-button">LogIn</button></NavLink>
            <button onClick={logout} className="nav-button">LogOut</button>
          </div>
        </nav>
      )
    }
  }
  return(
    renderNav()
  )
})

const mstp = state => {
  return {user: state.user}
}
export default connect(mstp, { logoutUser } )(Nav);
