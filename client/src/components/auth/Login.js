import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import loginimg from './img-01.png';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //  pull from formdata
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='login-100'>
        <div className='wrap login-100'>
          <div className='login-pic'>
            <img src={loginimg} alt='IMG' />
          </div>

          <form className='form login-form' onSubmit={(e) => onSubmit(e)}>
            <p className='  login-form-title text-primary'>
              <i className='fas fa-user'></i> Sign into Your Account
            </p>
            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className='wrap-input100'>
              <input
                className='input100 input200'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>

            <input
              type='submit'
              className='btn btn-primary container-login100-form-btn login100-form-btn'
              value='Login'
            />

            <p className='text-center p-t-136'>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </p>

            <p className='text-center p-t-136'>
              Don't have an account?
              <Link to='/register'>
                Sign Up
                <i
                  className='fa fa-long-arrow-right m-l-5'
                  aria-hidden='true'
                ></i>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
