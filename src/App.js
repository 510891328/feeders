import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Homepage from './components/HomepageNews/Homepage'
import Nav from './components/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import SearchResult from './components/SearchResult/SearchResults'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/profile'>
            <ProfileContainer />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/searchResults'>
            <SearchResult />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
