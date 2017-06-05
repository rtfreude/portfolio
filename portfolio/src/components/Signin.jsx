import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

signIn() {
  //console.log('this is the current state', this.state);
  const { email, password } = this.state;
  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .catch(error => {
    this.setState({error})
  })
}
  render() {
    return (
      <div className='form-inline signin-container' style={{margin: '5%'}}>
        <h3>Sign in to learn more...</h3>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}

          />
          <input
          className="form-control"
          type="password"
          style={{marginRight: '5px'}}
          placeholder="password"
          onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
          Sign in
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div>Not signed up? No problem <Link to={'/signup'}><strong><em>CLICK HERE!</em></strong></Link></div>
      </div>
    )
  }
}

export default SignIn;