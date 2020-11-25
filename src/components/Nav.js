import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../redux/action'

const Nav = (props) => {
  const logout = () => {
    props.logoutUser(props.user)
  }
  
  return(
    <>
    <NavLink to="/login"> LogIn </NavLink>
    <NavLink to="/signup"> SignUp </NavLink>
    <NavLink to="/profile"> Profile </NavLink>
    <NavLink to="/"> Homepage </NavLink>
    <button onClick={logout}>LogOut</button>
    </>
  )
}

const mstp = state => {
  return {user: state.user}
}
export default connect(mstp, { logoutUser } )(Nav);
