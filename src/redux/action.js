export function loginUser(user) {

  return function(dispatch){
    fetch('https://feeder-back-end.herokuapp.com/login',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        accepts: 'application/json'
      },
      body:JSON.stringify({user: user})
    })
    .then(resp => resp.json())
    .then(user => dispatch({ type: "LOGIN", payload: user }))
    .catch(console.log)
  }
};

export function logoutUser(user) {

  return function(dispatch){
    dispatch({ type: "LOGOUT", payload: null })
  }

};

export function signupUser(payload) {
  return function(dispatch){
    fetch('https://feeder-back-end.herokuapp.com/signup',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        accepts: 'application/json'
      },
      body:JSON.stringify({user: payload})
    })
    .then(resp => resp.json())
    .then(payload => dispatch({ type: "SIGNUP", payload: payload}))
  }
}

export function fetchArticles(payload) {
  return function(dispatch){
    fetch(`https://feeder-back-end.herokuapp.com/user_articles/${payload.user_id}`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload => dispatch({type:'ARTICLES', payload}))
}}

export function addArticle(payload){
  return function(dispatch){
    fetch('https://feeder-back-end.herokuapp.com/articles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json',
        Authorization: `Bearer ${payload.token}`
      },
      body: JSON.stringify({token: payload.token, article: payload.article})
    })
    .then(resp => resp.json())
    .then(payload => dispatch({type: 'ADD_ARTICLES', payload: payload}))
  }
}

export function deleteArticle(payload){
  return function(dispatch){
    fetch(`https://feeder-back-end.herokuapp.com/articles/${payload}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(payload => dispatch({type: 'DELETE_ARTICLE', payload: payload}))
  }
}

export function fetchCategories(payload){
  return function(dispatch){
    fetch(`https://feeder-back-end.herokuapp.com/user_categories/${payload}`, {
      method: 'GET',
      headers: {
        'content-type':'application/json',
        accepts: 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload => dispatch({type: 'CATEGORIES', payload: payload}))
  }
}

export function addCategories(payload){
  return function(dispatch){
    fetch('https://feeder-back-end.herokuapp.com/user_categories', {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        accepts: 'application/json',
        Authorization: `Bearer ${payload.token}`
      },
      body: JSON.stringify({token:payload.token, name: payload.name})
    })
    .then(resp => resp.json())
    .then(payload => {
      if(payload.message === undefined ){
        dispatch({type:'ADD_CATEGORY', payload: payload})
      }else{
        console.log(payload.message)
      }
    })
  }
}

export function deleteCategory(payload){
  return function(dispatch){
    fetch(`https://feeder-back-end.herokuapp.com/user_categories/${payload}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(payload => dispatch({type:'DELETE_CATEGORY', payload:payload}))
  }
}
