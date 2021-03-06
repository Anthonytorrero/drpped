import React from 'react';

import FormInput from '../form-input/form-input.component';
import SignInButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className='buttons'>
            <SignInButton type='submit' value='submit Form'>SIGN IN</SignInButton>
            <SignInButton type='button' onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</SignInButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
