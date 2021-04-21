import React from 'react';

import FormInput from '../form-input/form-input.component';
import SignInButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({email:'', password: ''});
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }


  render() {
    return(
      <div className = 'sign-in'>
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email' 
            required 
          />
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='password' 
            required 
          />

          <SignInButton type='submit' value='submit Form'>SIGN IN</SignInButton>
          <SignInButton onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</SignInButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
