import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//import createHistory from 'history/createBrowserHistory'
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './src/firebase';
import { logUser } from './src/actions';
import reducer from './src/reducers';


import App from './src/components/App';
import Signin from './src/components/Signin';
import SignUp from './src/components/SignUp';
import Landing from './src/components/Landing';


const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email))
    browserHistory.push('/App');
    //console.log('user has signed in or up', user);
  } else {
    browserHistory.replace('/landing');
    //console.log('user has signed out or still needs to sign in')
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/landing" component={Landing} />
      <Route path="/app" component={App} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)