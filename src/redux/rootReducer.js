import { combineReducers } from 'redux'

const initialState = {
  user: null,
  articles: [],
  categories: []
}
function loginUser(state = initialState.user, action) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, user: action.payload}
    case 'LOGOUT':
      return {...state, user: null}
    default:
      return state
  }
}

function articles(state = initialState.articles, action){
  switch (action.type) {
    case 'ARTICLES':
      return action.payload
    case 'ADD_ARTICLE':
      return [...state, action.payload]
    case 'DELETE_ARTICLE':
      return state.filter(article => article.id !== action.payload.id)
    default:
      return state
  }
}

function signupUser(state = initialState.user, action) {
  switch (action.type) {
    case 'SIGNUP':
      return {...state, user: action.payload}
    default:
      return state
  }
}

function categories(state = initialState.categories, action){
  switch (action.type) {
    case "CATEGORIES":
      return action.payload
    case "ADD_CATEGORY":
      return [...state, action.payload]
    case "DELETE_CATEGORY":
      return state.filter(category => category.id !== action.payload.id)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: loginUser,
  newUser: signupUser,
  articles: articles,
  categories: categories
})

export default rootReducer;
